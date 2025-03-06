import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Change route to include /api
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email configuration');
      return res.status(500).json({ error: 'Email configuration missing' });
    }

    const mailOptions = {
      from: {
        name: "Portfolio Contact Form",
        address: process.env.EMAIL
      },
      to: process.env.EMAIL,
      subject: `🌟 New Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body style="margin: 0; padding: 0; background-color: #f0f0f0; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%); padding: 30px 40px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">🌟 New Portfolio Contact</h1>
            </div>
            
            <div style="padding: 40px;">
              <div style="padding: 15px; background-color: #f8f7ff; border-radius: 10px; margin-bottom: 30px;">
                <h2 style="margin: 0 0 15px 0; color: #4c1d95; font-size: 18px; font-weight: 600;">
                  Sender Information
                </h2>
                <p style="margin: 5px 0; font-size: 16px;">
                  <strong style="color: #6d28d9; display: inline-block; width: 80px;">Name:</strong>
                  <span style="color: #374151;">${name}</span>
                </p>
                <p style="margin: 5px 0; font-size: 16px;">
                  <strong style="color: #6d28d9; display: inline-block; width: 80px;">Email:</strong>
                  <a href="mailto:${email}" style="color: #6d28d9; text-decoration: none;">${email}</a>
                </p>
              </div>

              <div style="padding: 20px; background-color: #f8f7ff; border-radius: 10px;">
                <h2 style="margin: 0 0 15px 0; color: #4c1d95; font-size: 18px; font-weight: 600;">
                  Message
                </h2>
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap; font-size: 16px;">
                  ${message}
                </p>
              </div>
            </div>

            <div style="padding: 20px; background-color: #f8f7ff; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Sent from Portfolio Contact Form
              </p>
              <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
                ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('Server error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
