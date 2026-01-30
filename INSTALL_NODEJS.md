# Install Node.js and npm

## Quick Installation Guide

Since Homebrew is not installed, we'll use the **official Node.js installer** (easiest method).

## Method 1: Official Node.js Installer (Recommended)

### Step 1: Download Node.js
1. Go to: **https://nodejs.org/**
2. Click the **"LTS"** button (recommended version, currently v20.x or v22.x)
3. This will download a `.pkg` file for macOS

### Step 2: Install Node.js
1. Open the downloaded `.pkg` file
2. Follow the installation wizard:
   - Click "Continue" through the introduction
   - Accept the license agreement
   - Choose installation location (default is fine)
   - Click "Install"
   - Enter your Mac password when prompted
3. Wait for installation to complete

### Step 3: Verify Installation
Open Terminal and run:
```bash
node --version
npm --version
```

You should see version numbers like:
- `v20.11.0` (or similar)
- `10.2.4` (or similar)

## Method 2: Install Homebrew First (Optional)

If you prefer using Homebrew for package management:

### Install Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Node.js:
```bash
brew install node
```

## After Installation

Once Node.js is installed, you can proceed with:

```bash
cd ~/prototype
npm install
npm run dev
```

## Troubleshooting

### If commands still don't work after installation:
1. **Close and reopen Terminal** (to refresh PATH)
2. Or run: `source ~/.zshrc` (or `source ~/.bash_profile` if using bash)

### If you get permission errors:
- Make sure you entered your password correctly during installation
- Try running with `sudo` if needed (though this is usually not necessary)

### Check your PATH:
```bash
echo $PATH
```
Make sure `/usr/local/bin` or `/opt/homebrew/bin` is in the PATH.

## Next Steps

After Node.js is installed:
1. ✅ Verify: `node --version` and `npm --version`
2. ✅ Install dependencies: `cd ~/prototype && npm install`
3. ✅ Start development: `npm run dev`
4. ✅ Enable GitHub Pages (see SETUP_INSTRUCTIONS.md)
