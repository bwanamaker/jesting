it("Should have the correct title", async () => {
  await page.goto("https://webflow.com");
  expect(await page.title()).toBe(
    "Webflow: The no-code platform for web design and development"
  );
});
