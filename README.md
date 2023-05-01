# Nicehash api

### Examples

- [javascript](https://github.com/nicehash/rest-clients-demo/blob/master/javascript/hashpower.js)

### TEST environment

Generate Api key and Secret for test platform on:

https://test.nicehash.com (User / Settings / API Keys)
Organization ID is displayed just above "+ Create new API key" button.

Use https://api-test.nicehash.com for API domain.

The entire platform runs on testnet. This means that you don’t have to use your own funds to test the platform. This is the opportunity to familiarize yourself with the new system, place hash-power orders and try trading without spending any real money.

### PRODUCTION environment

To use production just generate key the same way on https://www.nicehash.com and use https://api2.nicehash.com for API domain.

### API docs
Can be found here: https://docs.nicehash.com/

# NODE API

- Install dependencies

	`npm install`
	
- Enter your API key settings into `config.js`
- Uncomment example you want to run in `index.js`
- Run with

	`node index.js`

## Get api keys

![](https://raw.githubusercontent.com/nicehash/rest-clients-demo/master/generate_key.gif)
