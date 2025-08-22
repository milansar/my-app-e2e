import { by, element, expect, device } from 'detox';
describe('Example Test', () => {
beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should show welcome screen when user is not logged in', async () => {
    await expect(element(by.text('Join Us'))).toBeVisible();
    await expect(element(by.text('Sign In'))).toBeVisible();
  });
   it('should take to Sign in screen when user click on Sign in', async () => {
    await element(by.text('Sign In')).tap();
    await expect(element(by.text('Forgot Password'))).toBeVisible();
  });

    it('should take to create account when user click on Join Us', async () => {
    await element(by.text('Join Us')).tap();
    await expect(element(by.text('Next'))).toBeVisible();
  });
});
