import Api from './api.js';
import config from './config.js';

const api = new Api(config);

async function getBalance() {
  await api.getTime(); // get server time - required
  const { totalBalance } = await api.get(
    "/main/api/v2/accounting/account2/BTC",
  );
  console.log(`NiceHash total balance: ${totalBalance} BTC`);
}

getBalance();
