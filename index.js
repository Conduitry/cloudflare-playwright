import { firefox } from 'playwright-core';

if (process.argv.length !== 3) {
	console.log('Usage: <hostname>');
	process.exit(1);
}

const browser = await firefox.launch({ headless: !process.env.DISPLAY });
browser.on('disconnected', () => process.exit(1));
const context = await browser.newContext();
const page = await context.newPage();
page.on('close', () => process.exit(1));
const user_agent = await page.evaluate('navigator.userAgent');

await page.goto(`https://${process.argv[2]}`);

let cf_clearance;
while (!cf_clearance) {
	await new Promise(res => setTimeout(res, 100));
	cf_clearance = (await context.cookies()).find(({ name }) => name === 'cf_clearance');
}
console.log(JSON.stringify({ headers: { cookie: `cf_clearance=${cf_clearance.value}`, 'user-agent': user_agent } }));
process.exit(0);
