import { firefox } from 'playwright-core';

const browser = await firefox.launch();
const context = await browser.newContext();
const page = await context.newPage();
const user_agent = await page.evaluate('navigator.userAgent');

await page.goto(`https://${process.argv[2]}`);

let cf_clearance;
while (!cf_clearance) {
	await new Promise(res => setTimeout(res, 100));
	cf_clearance = (await context.cookies()).find(({ name }) => name === 'cf_clearance');
}
console.log(JSON.stringify({ headers: { cookie: `cf_clearance=${cf_clearance.value}`, 'user-agent': user_agent } }));

await browser.close();
