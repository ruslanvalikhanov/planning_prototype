# Setup Instructions

## 0. Install Node.js (If Not Already Installed)

**If you see "command not found: npm"**, you need to install Node.js first.

See **INSTALL_NODEJS.md** for detailed installation instructions.

Quick method:
1. Go to https://nodejs.org/
2. Download the LTS version (macOS installer)
3. Run the installer
4. Close and reopen Terminal
5. Verify: `node --version` and `npm --version`

## 1. Install Dependencies

Once Node.js is installed, install project dependencies:

```bash
cd ~/prototype
npm install
```

**Note**: If you get "command not found: npm", see INSTALL_NODEJS.md first.

Verify Node.js is installed:
```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

Or run the verification script:
```bash
cd ~/prototype
./verify_nodejs.sh
```

Then install dependencies:
```bash
npm install
```

This will install all required packages:
- Vue 3
- Vite
- Vue Router
- TypeScript
- ESLint
- And all other dependencies listed in `package.json`

## 2. Enable GitHub Pages

### Step-by-Step Instructions:

1. **Go to your repository on GitHub:**
   - Navigate to: https://github.com/ruslanvalikhanov/planning_prototype

2. **Open Settings:**
   - Click on the **"Settings"** tab (top navigation bar)

3. **Navigate to Pages:**
   - In the left sidebar, click **"Pages"** (under "Code and automation" section)

4. **Configure Source:**
   - Under **"Source"**, select **"GitHub Actions"** from the dropdown
   - (Do NOT select "Deploy from a branch")

5. **Save:**
   - The configuration will be saved automatically

6. **Wait for First Deployment:**
   - After enabling, GitHub Actions will automatically trigger the deployment workflow
   - You can monitor the progress in the **"Actions"** tab
   - The first deployment may take 2-3 minutes

7. **Access Your Prototype:**
   - Once deployed, your prototype will be available at:
     - **TC Variant**: `https://ruslanvalikhanov.github.io/planning_prototype/TC`
     - **EC Variant**: `https://ruslanvalikhanov.github.io/planning_prototype/EC`
   - The URL will also be shown in the Pages settings after deployment

## 3. Verify Setup

### Check Dependencies:
```bash
cd ~/prototype
npm list --depth=0
```

### Test Locally:
```bash
npm run dev
```
Then open http://localhost:5173 in your browser and navigate to:
- http://localhost:5173/TC (TC variant)
- http://localhost:5173/EC (EC variant)

### Check GitHub Pages:
- Go to the **"Actions"** tab in your repository
- Look for the "Deploy to GitHub Pages" workflow
- It should show a green checkmark when deployment is successful

## Troubleshooting

### If GitHub Pages doesn't deploy:
1. Check the **Actions** tab for any errors
2. Ensure the workflow file `.github/workflows/deploy.yml` exists
3. Make sure you selected "GitHub Actions" as the source (not "Deploy from a branch")

### If npm install fails:
1. Make sure Node.js version 18+ is installed
2. Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
3. Check for any error messages and address them

## Next Steps

Once everything is set up:
- Start developing: `npm run dev`
- Make changes to TC/EC variants in `src/views/`
- Push changes to trigger automatic deployment
- Share the GitHub Pages URLs with your testers
