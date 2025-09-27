import "tsx/cjs";
import type { ExpoConfig } from "expo/config";

const bundleIdentifier = "dev.christopher2k.bob";

const config: ExpoConfig = {
  name: "bob",
  slug: "bob",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    bundleIdentifier,
    supportsTablet: true,
  },
  android: {
    package: bundleIdentifier,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/OpenSans-Regular.ttf",
          "./assets/fonts/OpenSans-SemiBold.ttf",
          "./assets/fonts/OpenSans-Medium.ttf",
          "./assets/fonts/BasicSans-Regular.otf",
          "./assets/fonts/BasicSans-Bold.otf",
          "./assets/fonts/BasicSans-SemiBold.otf",
        ],
      },
    ],
    ["expo-sqlite", {}],
    [
      "expo-dev-client",
      {
        launchMode: "most-recent",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
