# cloudflare-playwright

A simple tool to deal with the "Checking your browser before accessing [site]." interstitials from Cloudflare.

## Usage

This uses Playwright to visit the site, waits for the Cloudflare scripts to do their thing and for the `cf_clearance` cookie to be created, and then outputs the headers that should be set on future requests for automated access.

It can be run with the Playwright browser dependencies installed natively on your system, or with the Playwright Docker image.

### Natively

```shell
npm install
npx playwright install-deps firefox
npx playwright install firefox
```

Then:

```shell
node . example.com
```

### With Docker

```shell
npm install
```

Then:

```shell
./cloudflare-playwright.sh example.com
```

## License

[MIT](LICENSE)
