import { by, element, expect, device } from 'detox';
describe('Example Test', () => {
beforeAll(async () => {
    await device.launchApp();
  });
  it('should display Join us text', async () => {
    await expect(element(by.text('Join Us'))).toBeVisible();
  });
   it('should display Sign In', async () => {
    await expect(element(by.text('Explore'))).toBeVisible();
  });
});
