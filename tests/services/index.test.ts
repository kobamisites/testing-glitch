import { test, expect, Page } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/services')
})


test.describe('Index', () => {
  test('Services Screenshot', async ({ page }, testConfig) => {
    // Act
    // Wait for page
    await page.locator('#app').waitFor()
    await page.pause()
    // // Wait for embed widget
    // await page.locator('article.card').waitFor()

    // Assert
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot('index.png')
  })
})