import {
  // React Native's internal InitializeCore module sets up `window` but runs only when its React
  // renderer is loaded. We can cause this by loading one of its dependents.
  findNodeHandle,
} from 'react-native';

import ExpoGoModule from './ExpoGoModule';
import { shouldThrowAnErrorOutsideOfExpo } from './validatorState';

findNodeHandle; // eslint-disable-line no-unused-expressions

if (shouldThrowAnErrorOutsideOfExpo() && ExpoGoModule != null && !ExpoGoModule?.expoVersion) {
  throw new Error(
    `Expo native runtime is not available: something went wrong and we aren't sure what it was. Please post more information and get support at https://forums.expo.dev.`
  );
}
