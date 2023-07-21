import { requireNativeModule } from 'expo-modules-core';

type ExpoGoModule = null | {
  expoVersion: string;
};

const NativeModule = ((): ExpoGoModule => {
  try {
    return requireNativeModule('ExpoGoModule');
  } catch {
    return null;
  }
})();

export default NativeModule;
