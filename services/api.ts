import axios from 'axios';
import { Lead, ContactFormData, ApiResponse } from '../types';

// In a real app, this would be your backend URL
const BASE_URL = 'https://api.zetax.com/v1';

// Mocking the axios instance for this demo
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const LeadService = {
  getLeads: async (city: string, category: string): Promise<Lead[]> => {
    // API Placeholder: GET /api/leads?city=...&category=...
    console.log(`[API] Fetching leads for ${city} in ${category}`);
    
    // Simulating API response delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock data return
    return [
      { id: '1', businessName: 'TechFlow Solutions', category: 'Software', phone: '+1 555-0101', website: 'techflow.example.com', location: city, verified: true },
      { id: '2', businessName: 'Urban Coffee Roasters', category: 'Hospitality', phone: '+1 555-0102', website: 'urbancoffee.example.com', location: city, verified: true },
      { id: '3', businessName: 'Elite Legal Partners', category: 'Legal', phone: '+1 555-0103', website: 'elitelegal.example.com', location: city, verified: false },
      { id: '4', businessName: 'Green Leaf Landscaping', category: 'Services', phone: '+1 555-0104', website: 'greenleaf.example.com', location: city, verified: true },
      { id: '5', businessName: 'SkyHigh Real Estate', category: 'Real Estate', phone: '+1 555-0105', website: 'skyhigh.example.com', location: city, verified: true },
    ];
  },

  exportLeads: async (leadIds: string[]): Promise<boolean> => {
    // API Placeholder: POST /api/export
    console.log(`[API] Exporting leads: ${leadIds.join(', ')}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }
};

export const ContactService = {
  submitForm: async (data: ContactFormData): Promise<ApiResponse<null>> => {
    // API Placeholder: POST /api/contact
    console.log('[API] Submitting contact form:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: true, message: 'Message sent successfully!' };
  }
};

export const AiService = {
  sendMessage: async (message: string): Promise<string> => {
    // API Placeholder: POST /api/chat
    console.log('[API] Sending AI message:', message);
    await new Promise(resolve => setTimeout(resolve, 600));
    return `This is a simulated AI response to: "${message}". ZetaX AI agents can handle complex queries, schedule appointments, and qualify leads automatically.`;
  }
};