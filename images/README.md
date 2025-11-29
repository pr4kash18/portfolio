# Image Placement Guide for Portfolio Website

This guide explains which images you need to add to your portfolio website and where to place them for proper display.

## Directory Structure
```
images/
├── profile/
├── certificates/
└── projects/
```

## Images Required

### 1. Profile Images
Place these images in the `images/profile/` folder:

- `profile.jpg` or `profile.png` - Your professional headshot (used in hero and about sections)
  Size recommendation: 400x400 pixels minimum

### 2. Certificate Images
Place these images in the `images/certificates/` folder:

- `digital-productivity-ai.jpg` - Digital Productivity with AI certificate (YuWaah & UNICEF)
- `basic-python.jpg` - Basic Python certificate (Simplilearn)
- `data-analytics.jpg` - Break Into Data Analytics certificate (Coding Ninjas & KodeInKGP)

Size recommendation: 600x400 pixels for best display

### 3. Project Images
Place these images in the `images/projects/` folder:

- `project-1.jpg` - First project thumbnail
- `project-2.jpg` - Second project thumbnail
- `project-3.jpg` - Third project thumbnail

Size recommendation: 600x400 pixels for best display

## Implementation Notes

Once you've added your images, you'll need to update the HTML file to reference them:

1. **Profile Image** - Replace the icon placeholders in both hero and about sections with:
   ```html
   <img src="images/profile/profile.jpg" alt="Chandra Prakash Choubisa">
   ```

2. **Certificate Images** - Replace the icon placeholders in the certificates section with:
   ```html
   <img src="images/certificates/digital-productivity-ai.jpg" alt="Digital Productivity with AI Certificate">
   ```
   (Repeat for each certificate with respective filenames)

3. **Project Images** - Replace the icon placeholders in the projects section with:
   ```html
   <img src="images/projects/project-1.jpg" alt="Project Title">
   ```
   (Repeat for each project with respective filenames)

All images should be in JPG or PNG format for optimal web performance.