const assert = require('assert');
import playwright from 'playwright';

describe('UI test PIXLR', () => {
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
            await page.goto('https://pixlr.com/ru/');
        })

        afterEach(async () => {
            await page.screenshot({path: 'screenshot/screenshot-pixlr.png'});
            await page.close();
            await browser.close();
        })

        it('Авторизация PIXLR', async () => {
                await page.click('#login');
				await page.click('#login-email');
                await page.fill('#login-email', 'larasa9445@healteas.com');
                await page.click('#login-password');
                await page.fill('#login-password', 'qwerty12');
                await page.click('#login-btn');
                const profileName = ('#config_auth > div:nth-child(2) > div.user');
                const profileNameText = await page.textContent(profileName);
                assert.deepEqual(profileNameText, 'larasa')
            }
        )
    }
)

