// Serverless function for Netlify
import express from 'express';
import serverless from 'serverless-http';
import { storage } from '../../server/storage';
import { contactFormSchema } from '../../shared/schema';

const app = express();
app.use(express.json());

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    // Validate the request body
    const validatedData = contactFormSchema.parse(req.body);
    
    // Store the contact submission
    const submission = await storage.createContactSubmission(validatedData);
    
    // Return success response
    res.status(200).json({ 
      success: true, 
      message: "Contact form submitted successfully",
      data: submission
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(400).json({ 
      success: false, 
      message: "Invalid form data. Please check your submission and try again." 
    });
  }
});

// Donation processing endpoint (placeholder for future Cashfree integration)
app.post("/api/donations/process", async (req, res) => {
  try {
    // This is a placeholder for future Cashfree payment gateway integration
    // For now, just return a success message
    res.status(200).json({ 
      success: true, 
      message: "Donation request received. This endpoint will be integrated with Cashfree payment gateway in the future.",
      orderId: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    });
  } catch (error) {
    console.error("Error processing donation:", error);
    res.status(500).json({ 
      success: false, 
      message: "An error occurred while processing your donation. Please try again later."
    });
  }
});

// Process the request with serverless-http
export const handler = serverless(app);