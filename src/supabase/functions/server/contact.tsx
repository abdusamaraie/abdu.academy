import { Hono } from 'hono';
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from 'https://esm.sh/resend@2.0.0';

const app = new Hono();

// Create a Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Create Resend client
const resendApiKey = Deno.env.get('RESEND_API_KEY')!;
const resend = new Resend(resendApiKey);

// Contact form endpoint
app.post('/contact', async (c) => {
  try {
    // Get the authorization header
    const authHeader = c.req.header('Authorization');
    console.log('Auth header received:', authHeader ? 'Present' : 'Missing');
    
    // If no auth header, return 401
    if (!authHeader) {
      return c.json({ error: 'Missing authorization header' }, 401);
    }
    
    // Extract the JWT token
    const token = authHeader.replace('Bearer ', '');
    
    // Verify the JWT token with Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      console.log('Auth error:', authError);
      return c.json({ error: 'Invalid authorization token' }, 401);
    }
    
    console.log('User authenticated:', user.email);
    
    const { name, email, subject, message } = await c.req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json({ error: 'All fields are required' }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: 'Invalid email format' }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable not set');
      return c.json({ error: 'Email service not configured' }, 500);
    }

    // Log the email request for debugging
    console.log('Resend API Key configured:', !!resendApiKey);

    // Send email using Resend SDK
    try {
      const emailResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['contact@abdu.academy'],
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <div style="background: white; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This email was sent from the ABDU ACADEMY contact form.</p>
              <p>Reply directly to this email to respond to ${name} at ${email}</p>
            </div>
          </div>
        `,
        reply_to: email
      });

      console.log('Email sent successfully:', emailResult);

    return c.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      emailId: emailResult.id 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return c.json({ 
      error: 'Internal server error while processing contact form' 
    }, 500);
  }
});



export default app;