import { chromium, Browser, Page } from "playwright";

let browser: Browser;
beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});

let page: Page;
beforeAll(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

it("Should have the correct title", async () => {
  await page.goto("https://webflow.com");
  expect(await page.title()).toBe(
    "Webflow: The no-code platform for web design and development"
  );
});
