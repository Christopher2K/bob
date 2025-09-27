# Agent Guidelines for Bob (Expo React Native App)

## Build/Lint/Test Commands
- `pnpm dev` - Start Expo development server
- `pnpm android` - Run on Android device/emulator  
- `pnpm ios` - Run on iOS device/simulator
- `pnpm format` - Format all files
- No test framework currently configured

## Code Style & Conventions
- **Formatting**: Use Biome with 2-space indentation, double quotes
- **TypeScript**: Strict mode enabled, use proper typing
- **Imports**: Auto-organize imports (Biome handles this)
- **Components**: Use default exports for React components
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File Structure**: Components in `app/` directory, follow Expo Router patterns
- **Styling**: Use StyleSheet.create() for React Native styles
- **Package Manager**: Use `pnpm` (v10.15.0)

## Error Handling
- Handle async operations with proper try/catch blocks
- Use TypeScript strict mode to catch type errors early
