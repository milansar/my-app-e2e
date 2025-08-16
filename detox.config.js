/** @type {import('detox').DetoxConfig} */
module.exports = {
  testRunner: {
    $0: 'jest',
    args: {
      config: 'e2e/jest.config.js',
      _: ['e2e']
    },
  },
  apps: {
    'ios.sim.debug': {
      type: 'ios.app',
      binaryPath: 'build/ios/myapp.app'
    },
    'android.emu.debug': {
      type: 'android.apk',
      binaryPath: 'build/android/myapp.apk',
      testBinaryPath: 'build/android/myapp-androidTest.apk',
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: { type: 'iPhone 16 Pro' }
    },
    emulator: {
      type: 'android.emulator',
      device: { avdName: 'Android_Phone' }
    }
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.sim.debug'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.emu.debug'
    }
  }
};
