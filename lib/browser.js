import playwright from 'playwright';

let browser, context, page;

async function run(url) {
    browser = await playwright.chromium.launch(
        {
            headless: true,
            slowMo: 850,
        }
    )
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    return page;
}

async function stop() {
    await browser.close()
}

export {run, stop}
