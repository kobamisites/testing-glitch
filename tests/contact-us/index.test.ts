import { test, expect, Page } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/contact-us')
})


test.describe('Index', () => {
  test('Contact Us Screenshot', async ({ page }, testConfig) => {
    // Act
    // Wait for page
    await page.locator('#app').waitFor()

    // Assert
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot('index.png')
  })
})