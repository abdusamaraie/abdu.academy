export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export const validateForm = (formData: FormData): string | null => {
  if (!formData.name.trim()) return 'Name is required';
  if (!formData.email.trim()) return 'Email is required';
  if (!formData.email.includes('@')) return 'Please enter a valid email';
  if (!formData.subject.trim()) return 'Subject is required';
  if (!formData.message.trim()) return 'Message is required';
  return null;
};

export const createContactRequest = (formData: FormData, _projectId: string, publicAnonKey: string) => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
  const functionName = "make-server-fff2b88c";
  
  return {
    url: `${supabaseUrl}/functions/v1/${functionName}/contact`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`
      },
      body: JSON.stringify(formData)
    }
  };
};