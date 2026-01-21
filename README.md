# Recipe App

A modern cross-platform mobile application for managing and storing recipes locally on your device. Built with React Native and Expo.

## Features

### Current Features (Step 1)
- **Modern Home Screen** with gradient backgrounds and smooth animations
- Two main action cards:
  - **Add New Recipe**: Create and save new recipes
  - **View Recipes**: Browse your saved recipes
- Cross-platform support (iOS & Android)
- Beautiful, contemporary UI with:
  - Linear gradients
  - Smooth navigation transitions
  - Shadow effects and modern typography
  - Feature highlights section

### Upcoming Features
- Add recipe form with ingredients and instructions (Step 2)
- View and browse saved recipes (Step 3)
- Local storage using AsyncStorage or SQLite
- Edit and delete recipes
- Recipe categories and search functionality
- Recipe photos and ratings

## Technical Stack

- **Framework**: React Native with Expo
- **Language**: JavaScript (ES6+)
- **Navigation**: React Navigation 6
- **UI Components**: React Native + Expo Linear Gradient
- **Database**: AsyncStorage / SQLite (to be implemented)
- **Platform Support**: iOS, Android, and Web

## Project Structure

```
recipe-app/
├── App.js                       # Main app with navigation setup
├── src/
│   └── screens/
│       ├── HomeScreen.js        # Modern home screen with gradients
│       ├── AddRecipeScreen.js   # Add recipe placeholder (Step 2)
│       └── ViewRecipesScreen.js # View recipes placeholder (Step 3)
├── assets/                      # Images and icons
├── package.json                 # Dependencies
└── app.json                     # Expo configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (install with `npm install -g expo-cli`)
- Expo Go app on your mobile device (optional)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

3. **Run on a device**
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go
   - **iOS**: Press `i` in the terminal or scan QR code with Expo Go (iOS only)
   - **Web**: Press `w` to open in browser

### Building for Production

**Android APK:**
```bash
expo build:android
```

**iOS:**
```bash
expo build:ios
```

## Design Features

### Color Scheme
- **Primary Green**: #4CAF50 (Fresh, natural, cooking theme)
- **Gradient Backgrounds**:
  - Home: Green gradient (#4CAF50 → #E8F5E9)
  - Add Recipe: Orange-red gradient (#FF6B6B → #FFE0D9)
  - View Recipes: Purple gradient (#667EEA → #E8E4F3)

### UI Elements
- Modern card-based design
- Smooth gradient backgrounds
- Elevated shadows and depth
- Responsive touch feedback
- Emoji icons for visual appeal
- Clean typography with proper hierarchy

## Development Status

- ✅ **Step 1: Complete** - Modern home screen with React Native
- 🔄 **Step 2: Planned** - Implementation of Add Recipe functionality
- 📋 **Step 3: Planned** - Implementation of View Recipes with local storage

## Screenshots

The app features a vibrant, modern design with:
- Gradient backgrounds transitioning from bold colors to soft pastels
- Large, touch-friendly action cards
- Clear visual hierarchy and intuitive navigation
- Feature highlights showcasing key capabilities

## License

This project is for personal use.
