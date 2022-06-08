import { firefox } from 'playwright';

const browser = await firefox.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto(`https://${process.argv[2]}`);
await new Promise(res => setTimeout(res, 5000));

const cf_clearance = (await context.cookies()).find(({ name }) => name === 'cf_clearance').value;
const user_agent = await page.evaluate('navigator.userAgent');
console.log(JSON.stringify({ headers: { cookie: `cf_clearance=${cf_clearance}`, 'user-agent': user_agent } }));

await browser.close();
