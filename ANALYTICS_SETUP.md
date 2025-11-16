# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter account details:
   - Account name: "Aashutosh Portfolio"
   - Check relevant boxes for data sharing
5. Click "Next"

## Step 2: Set Up Property

1. Property name: "Portfolio Website"
2. Reporting time zone: Select your timezone
3. Currency: USD
4. Click "Next"

## Step 3: Set Up Data Stream

1. Select platform: **Web**
2. Enter website URL: `https://aashutoshagrawal.github.io`
3. Stream name: "Portfolio Main Site"
4. Click "Create stream"

## Step 4: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (looks like `G-XXXXXXXXXX`)
2. Copy this ID

## Step 5: Add to Your Code

Open `src/utils/analytics.ts` and replace:
```typescript
const measurementId = 'G-XXXXXXXXXX'; // Replace with your actual ID
```

With your actual Measurement ID:
```typescript
const measurementId = 'G-ABC1234567'; // Your real ID
```

## Step 6: Deploy

```bash
npm run build
git add -A
git commit -m "Add Google Analytics tracking"
git push
```

## What You'll Track

- **Page Views**: Every page visit
- **User Sessions**: How long people stay
- **Traffic Sources**: Where visitors come from
- **Device Types**: Mobile vs Desktop
- **Geographic Data**: Where visitors are located
- **Popular Pages**: Which projects get most views

## View Your Data

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View real-time data: **Reports → Realtime**
4. View overall traffic: **Reports → Engagement → Overview**

---

## Alternative: Simple Counter (No Setup Required)

If you just want basic visit counts without setup, I can add a simple badge to your README that shows visit count using [shields.io](https://shields.io/) or similar services.
