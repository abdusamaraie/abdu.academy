import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { FormData, initialFormData, validateForm, createContactRequest } from './utils/contactFormHelpers';

interface ContactFormProps {
  trigger: React.ReactNode;
}

export function ContactForm({ trigger }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };





  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm(formData);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const { url, options } = createContactRequest(formData, projectId, publicAnonKey);
      console.log('Sending request to:', url);
      console.log('Request options:', options);
      
      const response = await fetch(url, options);
      const result = await response.json();

      console.log('Response status:', response.status);
      console.log('Response result:', result);

      if (!response.ok) {
        // Provide more detailed error information
        if (response.status === 500) {
          if (result.error?.includes('RESEND_API_KEY')) {
            throw new Error('Email service not configured. Please contact support.');
          } else if (result.error?.includes('email')) {
            throw new Error('Email service error. Please try again later.');
          } else {
            throw new Error(`Server error: ${result.error || 'Unknown error occurred'}`);
          }
        } else {
          throw new Error(result.error || `HTTP ${response.status}: ${response.statusText}`);
        }
      }

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData(initialFormData);
      setIsOpen(false);
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background border-2 border-foreground/20 z-[60] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-foreground" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="border-2 border-foreground/20 focus:border-foreground/60"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="border-2 border-foreground/20 focus:border-foreground/60"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What is this regarding?"
              className="border-2 border-foreground/20 focus:border-foreground/60"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your inquiry..."
              rows={4}
              className="border-2 border-foreground/20 focus:border-foreground/60 resize-none"
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-2 border-foreground/20 text-foreground hover:bg-foreground/10"
            >
              Cancel
            </Button>
            <motion.div className="flex-1">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                ) : (
                  'Send Message'
                )}
              </Button>
            </motion.div>
          </div>
          

        </form>
      </DialogContent>
    </Dialog>
  );
}