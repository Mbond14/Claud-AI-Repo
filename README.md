# Recipe App

An Android application for managing and storing recipes locally on your device.

## Features

### Current Features (Step 1)
- Home page with two main options:
  - Add New Recipe: Create and save new recipes
  - View Recipes: Browse your saved recipes

### Upcoming Features
- Add recipe form with ingredients and instructions
- View and browse saved recipes
- Local storage using Room database
- Edit and delete recipes
- Recipe categories and search functionality

## Technical Stack

- **Language**: Kotlin
- **UI**: XML layouts with Material Design
- **Database**: Room (for local storage)
- **Architecture**: MVVM pattern (to be implemented)
- **Min SDK**: 24 (Android 7.0)
- **Target SDK**: 34 (Android 14)

## Project Structure

```
app/
├── src/main/
│   ├── java/com/recipeapp/
│   │   ├── MainActivity.kt          # Home screen
│   │   ├── AddRecipeActivity.kt     # Add recipe screen
│   │   └── ViewRecipesActivity.kt   # View recipes screen
│   ├── res/
│   │   ├── layout/                  # UI layouts
│   │   ├── values/                  # Colors, strings, themes
│   └── AndroidManifest.xml
└── build.gradle.kts
```

## Building the Project

1. Open the project in Android Studio
2. Sync Gradle files
3. Run the app on an emulator or physical device

## Development Status

**Step 1: Complete** - Home page with navigation to Add and View recipe screens
**Step 2: In Progress** - Implementation of Add Recipe functionality
**Step 3: Planned** - Implementation of View Recipes functionality with database integration
