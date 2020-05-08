import Account from './models/Account';
import Transaction from './models/Transaction';
import Category from './models/Category';
import User from './models/User';
import Ledger from './models/Ledger';
import Payee from './models/Payee';


export const init = async () => {
  const forceSync = !!process.env.forceSync;
  await Account.sync({force: forceSync});
  await Transaction.sync({force: forceSync});
  await Category.sync({force: forceSync});
  await User.sync({force: forceSync});
  await Ledger.sync({force: forceSync});
  await Payee.sync({force: forceSync});





  const jack = await User.create({
    userName: 'jack',
    email: 'jack.JJJ@gmail.com',
    passwordHash: '89djheddkhdee33'
  });

  const tom = await User.create({
    userName: 'tom',
    email: 'tom.c@Kmail.com',
    passwordHash: '90d0dke888dje3j'
  });


  const supermarket = await Ledger.create({
    userID:tom.id,
    ledgerName: 'supermarket',
  });

  const smallbusiness = await Ledger.create({
    userID:tom.id,
    ledgerName: 'smallbusiness',
  });

 const food = await Category.create(
    {
      name: 'Food',
      ledgerID: supermarket.id,
    }
  );

  const transport = await Category.create(
    {
      name: 'Transport',
      ledgerID: smallbusiness.id,
    }
  );

const cash = await Account.create({
    name: 'cash',
    amount: '1000',
    ledgerID: supermarket.id,
    currency: 'NZD',
  });

  const bank = await Account.create({
    name: 'debit',
    amount: '10000',
    ledgerID: smallbusiness.id,
    currency: 'NZD',
  });

  const employee = await Payee.create({
    name: 'xiao zhang',
    ledgerID: smallbusiness.id
  });

const withdraw = await Transaction.create({
    transferType: -1,
    amount: 10,
    accountID: cash.id,
    categoryID: food.id,
    payeeID: employee.id,
    ledgerID: smallbusiness.id,
    note: 'a spending on food'
  });


  const transfer = await Transaction.create({
    transferType: 0,
    amount: 10,
    accountID: bank.id,
    toAccountID: cash.id,
    ledgerID: smallbusiness.id,
    categoryID: transport.id,
    note: 'transfer from bank to cash'
  });

  const income = await Transaction.create({
    transferType: 1,
    amount: 100,
    accountID: bank.id,
    ledgerID: supermarket.id,
    categoryID: transport.id,
    payeeID: employee.id,
    note: 'an income'
  });

  console.log('db seeding done');
};

if (typeof require !== 'undefined' && require.main === module) {
  init();
}
