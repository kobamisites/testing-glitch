import { test, expect, Page } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/about-us')
})


test.describe('Index', () => {
  test('About Us Screenshot', async ({ page }, testConfig) => {
    // Act
    // Wait for page
    await page.locator('#app').waitFor()
    // // Wait for embed widget
    // await page.locator('article.card').waitFor()

    // Assert
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot('index.png')
  })
})