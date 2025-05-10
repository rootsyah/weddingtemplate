import { storage } from '../server/storage';
import { insertContactSchema } from '../shared/schema';

export default async function handler(req, res) {
  // Hanya izinkan metode POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const validation = insertContactSchema.safeParse(req.body);
    
    if (!validation.success) {
      return res.status(400).json({ 
        message: 'Invalid contact information',
        errors: validation.error.errors 
      });
    }
    
    const contact = await storage.createContact(validation.data);
    return res.status(201).json(contact);
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ message: 'Failed to submit contact form' });
  }
}