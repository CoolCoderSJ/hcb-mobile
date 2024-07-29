import { appIconConfig } from "./src/lib/AppIconList";

const IS_DEV = process.env.APP_VARIANT === "development";

export default {
  expo: {
    "extra": {
      "eas": {
        "projectId": "4b5f6108-db4b-4615-a22c-27cd37c5c9ba"
      }
    },
    name: IS_DEV ? "HCB (dev)" : "HCB",
    slug: "hcb-mobile",
    version: "1.0.0",
    scheme: "hcb",
    orientation: "portrait",
    icon: "./assets/app-icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#EC3750",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? "com.hackclub.hcb.dev" : "com.hackclub.hcb",
      buildNumber: "1.0.0.11",
      config: {
        usesNonExemptEncryption: false,
      },
      associatedDomains: [
        "applinks:hcb.hackclub.com",
        "applinks:bank.hackclub.com",
      ],
    },
    android: {
      icon: "./assets/app-icon.png",
      adaptiveIcon: {
        foregroundImage: "./assets/app-icon-foreground.png",
        monochromeImage: "./assets/app-icon-monochrome.png",
        backgroundColor: "#EC3750",
      },
      package: IS_DEV ? "com.hackclub.hcb.dev" : "com.hackclub.hcb",
    },
    web: {
      bundler: "metro",
    },
    plugins: [
      [
        "expo-image-picker",
        {
          cameraPermission: "Allow HCB to take photos of receipts",
        },
      ],
      [
        "expo-font",
        {
          fonts: ["./assets/fonts/JetBrainsMono-Regular.ttf"],
        },
      ],
      "expo-secure-store",
      ["@config-plugins/react-native-dynamic-app-icon", appIconConfig],
      [
        "expo-local-authentication",
        { faceIDPermission: "Allow $(PRODUCT_NAME) to use Face ID." },
      ],
    ],
  },
};
