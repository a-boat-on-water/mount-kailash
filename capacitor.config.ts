import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kailash.app',
  appName: 'Kailash Trail',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    Geolocation: {
      // iOS: location permission prompts
    },
  },
};

export default config;
