import puppeteer from 'puppeteer';

describe('Popover', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
        });

        page = await browser.newPage();

        await page.goto('http://localhost:8080');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('popover появляется после клика', async () => {
        await page.click('.btn');

        const popover = await page.$('.popover');

        expect(popover).not.toBeNull();
    });

    test('popover содержит заголовок и текст', async () => {
        const title = await page.$eval(
            '.popover__title',
            (element) => element.textContent,
        );

        const text = await page.$eval(
            '.popover__text',
            (element) => element.textContent,
        );

        expect(title).toBe('Popover title');

        expect(text).toBe(
            'And here\'s some amazing content. It\'s\n' +
            'very engaging. Right?',
        );
    });

    test('popover исчезает после повторного клика', async () => {
        await page.click('.btn');

        const popover = await page.$('.popover');

        expect(popover).toBeNull();
    });
});
