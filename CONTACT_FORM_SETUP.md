# Contact Form Implementation

Your portfolio website now has an improved contact form that works with Formspree to send messages directly to cpr4kash18@gmail.com.

## How the Contact Form Works

The contact form now uses Formspree as the primary method with a fallback to the `mailto:` approach:

1. When a visitor submits the form, it attempts to send the message via Formspree
2. If Formspree fails, it falls back to opening the visitor's email client
3. Either way, the message reaches you at cpr4kash18@gmail.com

## Features

- **Primary Method**: Formspree for direct email delivery
- **Fallback Method**: Mailto link if Formspree fails
- **Validation**: Checks for required fields and valid email format
- **Responsive**: Works on all devices
- **Reliable**: Multiple delivery methods ensure message delivery

## How Visitors Experience the Form

1. Visitor fills out the form with their name, email, subject, and message
2. When they click "Send Message":
   - The form attempts to send the message directly to cpr4kash18@gmail.com via Formspree
   - If successful, they see a confirmation message
   - If Formspree fails, their email client opens with a pre-filled message
3. Either way, you receive the message at cpr4kash18@gmail.com

## Setting Up Formspree (Required)

To make the contact form work properly, you need to set up Formspree:

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form with your email: cpr4kash18@gmail.com
3. Get your Form ID (looks like: mXXXXXXX)
4. Update the Form ID in `script.js`:
   - Open `script.js` in a text editor
   - Find line 120: `fetch('https://formspree.io/f/your-form-id', {`
   - Replace `your-form-id` with your actual Form ID:
   ```javascript
   fetch('https://formspree.io/f/YOUR-ACTUAL-FORM-ID', {
   ```

## Why This Approach?

This solution was chosen because:

- It provides direct email delivery without requiring visitors to use their email client
- Has a reliable fallback method
- Doesn't require complex server-side code
- Works with free Formspree tier (50 submissions/month)
- Respects user privacy while still delivering messages

## Troubleshooting

If the form isn't working:

1. Ensure you've properly set up Formspree and updated the Form ID in `script.js`
2. Check that JavaScript is enabled in the browser
3. Test with different browsers
4. Check your Formspree dashboard for any errors
5. Look for the submission in your email (including Spam/Junk folders)

## Support

For any issues or questions about the contact form, please email cpr4kash18@gmail.com directly.

# Contact Information

The contact form has been removed from the portfolio website and replaced with a direct email contact option.

## How to Contact

Visitors can now contact you directly through:

1. **Email Link**: Clicking the email address (cpr4kash18@gmail.com) in the contact section will open the visitor's default email client with a new message to your address.

2. **Send Email Button**: The "Send Me an Email" button also opens the visitor's default email client with a new message to your address.

3. **Direct Email**: Visitors can copy your email address and send you a message directly.

## Why This Change?

This change was made to:

- Simplify the contact process
- Remove dependencies on external services
- Provide a more direct communication channel
- Reduce complexity in the codebase
- Ensure compatibility across all devices and email clients

## Benefits

- **No Setup Required**: Works immediately without any configuration
- **Universal Compatibility**: Works with all email providers
- **Privacy Respecting**: No third-party data collection
- **Reliable**: Direct communication channel
- **Simple**: Easy for visitors to use

## Support

For any issues or questions about the contact setup, please email cpr4kash18@gmail.com directly.
