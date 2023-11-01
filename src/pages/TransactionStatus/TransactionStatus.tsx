import './TransactionStatus.scss';

import { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { TxnContext } from '../../providers/TransactionProvider';
import { Transaction } from '../../transactions.ts';

export default function TransactionStatus() {
  const { transactions } = useContext(TxnContext);

  const [searchParams] = useSearchParams();

  const retailer = searchParams.get('retailer');
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  let avgTxnValue = 0;

  let filteredTxns: Transaction[] = [];

  if (retailer && from && to) {
    filteredTxns = transactions.filter((txn: Transaction) => {
      const [date, time] = txn.date.split(' ');
      const formattedDate = date.split('/').reverse().join('-');
      const parsedTxnDate = Date.parse(formattedDate + 'T' + time);

      const parsedFromDate = Date.parse(from);
      const parsedToDate = Date.parse(to);

      return txn.retailer === retailer?.trim() && parsedTxnDate - parsedFromDate >= 0 && parsedToDate - parsedTxnDate >= 0;
    });
  }

  if (filteredTxns.length > 0) {
    let totalTxnAmount = 0;
    filteredTxns.forEach((txn: Transaction) => {
      totalTxnAmount += txn.amount;
    });

    avgTxnValue = parseFloat((Math.round((totalTxnAmount / filteredTxns.length) * 100) / 100).toFixed(2));
  }

  return (
    <section className='transaction-status'>
      <h3>Transaction Status</h3>
      <div>
        <p>Number of transactions: {filteredTxns.length}</p>
        <p>Average Transaction Value: {avgTxnValue}</p>
      </div>
      <div>
        <Link to='/'>Go to Home</Link>
      </div>
    </section>
  );
}
