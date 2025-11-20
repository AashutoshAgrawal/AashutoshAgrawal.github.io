# Projects Organization

Each project has its own folder containing all related assets.

## Folder Structure:

```
/public/projects/
├── diabeat/
│   ├── cover.jpg              # Main project card image
│   ├── screenshot-1.jpg       # App screenshots
│   ├── screenshot-2.jpg
│   ├── demo.gif              # Optional demo GIF
│   └── ...
├── helphive/
│   ├── cover.jpg
│   ├── mockup-1.jpg          # UI mockups
│   ├── mockup-2.jpg
│   ├── user-flow.png         # User flows/diagrams
│   └── ...
├── gradplanner/
│   ├── cover.jpg
│   ├── dashboard.jpg         # Product screenshots
│   ├── algorithm.png         # Technical diagrams
│   └── ...
├── vr-compliance/
│   ├── cover.jpg
│   ├── vr-screenshot-1.jpg   # VR screenshots
│   ├── results-chart.png     # Charts/graphs
│   └── ...
└── airbnb/
    ├── cover.jpg             # Main cover image
    └── Slide1-19.jfif        # Presentation slides (already present)
```

## Image Guidelines:

### Cover Images (for project cards):
- **Filename**: `cover.jpg` or `cover.png`
- **Dimensions**: 1200x675px (16:9 aspect ratio)
- **Size**: Under 300KB
- **Use**: Displayed on project cards in the main Projects section

### Screenshots:
- **Dimensions**: 1920x1080px or higher
- **Format**: JPG for photos, PNG for UI with transparency
- **Naming**: Descriptive names (e.g., `dashboard-view.jpg`, `mobile-app.jpg`)

### Diagrams/Charts:
- **Format**: PNG (for transparency)
- **Dimensions**: Minimum 1200px width
- **Use**: Technical documentation, user flows, analytics

## Current Image Paths in Code:

Update `/src/constants/index.ts`:

```typescript
{
  id: 1,
  image: "/projects/diabeat/cover.jpg",
  // or use Unsplash placeholder until you have the image
}
```

## Quick Setup:

For each project folder, add at minimum:
1. **cover.jpg** - Main image for project card
2. **screenshot-1.jpg** - Key product screenshot
3. **screenshot-2.jpg** - Secondary screenshot (optional)
