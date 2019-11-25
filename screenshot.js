const puppeteer = require('puppeteer');

(async () => {
    // open the browser and prepare a page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // set the size of the viewport, so our screenshot will have the desired size
    await page.setViewport({
        width: 1280,
        height: 800
    })
    await page.goto('https://google.com');
    await page.screenshot({ path: 'screenshot.png' });
    // close the browser 
    await browser.close();
})();