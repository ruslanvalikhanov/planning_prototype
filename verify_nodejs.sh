#!/bin/bash
# Script to verify Node.js and npm installation

echo "Checking Node.js and npm installation..."
echo ""

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js is installed: $NODE_VERSION"
    
    # Check if version is 18 or higher
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_MAJOR" -ge 18 ]; then
        echo "   ✓ Version is 18+ (compatible)"
    else
        echo "   ⚠️  Version is below 18 (may need update)"
    fi
else
    echo "❌ Node.js is NOT installed"
    echo "   Please install Node.js from https://nodejs.org/"
fi

echo ""

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✅ npm is installed: $NPM_VERSION"
else
    echo "❌ npm is NOT installed"
    echo "   npm comes with Node.js - please install Node.js"
fi

echo ""
echo "---"
echo ""

# If both are installed, check if we're in the project directory
if command -v node &> /dev/null && command -v npm &> /dev/null; then
    if [ -f "package.json" ]; then
        echo "📦 Project found! Ready to install dependencies."
        echo ""
        echo "Run: npm install"
    else
        echo "💡 Navigate to the project directory first:"
        echo "   cd ~/prototype"
        echo "   npm install"
    fi
fi
