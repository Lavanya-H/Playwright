import { test, expect } from '@playwright/test';

test('check the check box', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')
    //     await page.locator('#menu-hamburger').dragTo( page.locator('#plate-items'))
    //    await page.locator('#menu-ice-cream').dragTo( page.locator('#plate-items'))
    //    await page.locator('#menu-fried-chicken').dragTo( page.locator('#plate-items'))
    const sourcechicken = await page.locator('#menu-hamburger')
    const icecream = await page.locator('#menu-ice-cream')
    const hamburger = await page.locator('#menu-fried-chicken')
    const targetlocator = await page.locator('#plate-items')
    await sourcechicken.dragTo(targetlocator)
    await icecream.dragTo(targetlocator)
    await hamburger.dragTo(targetlocator)
})