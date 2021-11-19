const assert = require('assert');
import playwright from 'playwright';

describe('UI test', () => {
        let browser, context, page;
        beforeEach(async () => {
            browser = await playwright.chromium.launch(
                {
                    headless: true,
                    slowMo: 250,
                }
            );
            context = await browser.newContext();
            page = await context.newPage();
            await page.goto('https://try.vikunja.io/login');
        })

        afterEach(async () => {
            // проверить
            await page.screenshot({path: 'screenshot.png'});
            await page.close();
            await browser.close();
        })

        it('Авторизация Vikunja', async () => {
                await page.click('#username');
                await page.fill('#username', 'demo');
                await page.click('#password');
                await page.fill('#password', 'demo');
                await page.click('.is-primary');
                const profileName = ('.user > .dropdown> .dropdown-trigger> .button >.username');
                const profileNameText = await page.textContent(profileName);
                // await page.navigation({waitUntil: 'networkidle'})
                //  const title = await page.title();
                // page.waitForSelector('.user > .dropdown> .dropdown-trigger> .button >.username');
                assert.deepEqual(profileNameText, 'demo')
            }
        )
    }
)
