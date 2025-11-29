# Resume and Contact Form Setup Guide

This guide explains how to properly set up your resume download and contact form functionality.

## Resume Download Setup

### Option 1: Link to an Existing Resume File
1. Create your resume in PDF format
2. Save it as `Chandra-Prakash-Choubisa-Resume.pdf` in the root directory of your portfolio
3. Update line 13 in `script.js` to:
   ```javascript
   window.open('Chandra-Prakash-Choubisa-Resume.pdf', '_blank');
   ```
4. Comment out the alert on line 16

### Option 2: Create a Simple Text Resume
1. Create a file named `resume.txt` in the root directory
2. Add your resume information in plain text format
3. Update line 13 in `script.js` to:
   ```javascript
   window.open('resume.txt', '_blank');
   ```
4. Comment out the alert on line 16

## Contact Form Setup with Formspree

### Step 1: Sign up for Formspree
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started Free" and create an account
3. Verify your email address

### Step 2: Create a New Form
1. After logging in, click "Create Form"
2. Select "Connect to your HTML form"
3. Enter your email address: `cpr4kash18@gmail.com`
4. Click "Create Form"

### Step 3: Get Your Form ID
1. After creating the form, you'll see a page with your form endpoint
2. It will look like: `https://formspree.io/f/mXXXXXXX`
3. The `mXXXXXXX` part is your Form ID

### Step 4: Update Your JavaScript
1. Open `script.js` in a text editor
2. Find line 120 with the Formspree endpoint:
   ```javascript
   fetch('https://formspree.io/f/your-form-id', {
   ```
3. Replace `your-form-id` with your actual Form ID:
   ```javascript
   fetch('https://formspree.io/f/mXXXXXXX', {
   ```

### Step 5: Test Your Form
1. Save the file and open `index.html` in your browser
2. Fill out the contact form and submit it
3. Check your email (including spam/junk folder) for the submission

## Troubleshooting

### If the Resume Download Isn't Working:
1. Ensure the resume file exists in the specified location
2. Check that the filename matches exactly (case-sensitive)
3. Verify that your web server allows file downloads

### If the Contact Form Isn't Sending Emails:
1. Ensure you've correctly updated the Form ID
2. Check your Formspree dashboard for any errors
3. Verify that your Formspree account is active
4. Check your email spam/junk folder
5. Test with different browsers

## Alternative Solutions

### For Resume Download:
- Host your resume on Google Drive or Dropbox and link to the shareable URL
- Use a cloud storage service with direct download links

### For Contact Form:
- **Email.js**: Another popular service for sending emails from static websites
- **Netlify Forms**: If you host your site on Netlify
- **Custom Backend**: If you have server-side capabilities

## Support

For any issues or questions about the resume download or contact form, please email cpr4kash18@gmail.com directly.