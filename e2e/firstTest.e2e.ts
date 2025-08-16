import { by, element, expect, device } from 'detox';
describe('Example Test', () => {
beforeAll(async () => {
    await device.launchApp();
  });
  it('should display welcome text', async () => {
    await expect(element(by.text('Welcome!'))).toBeVisible();
  });
   it('should display explore text', async () => {
    await expect(element(by.text('Explore'))).toBeVisible();
  });
});
