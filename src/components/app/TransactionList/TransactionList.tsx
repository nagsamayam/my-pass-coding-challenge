import './TransactionList.scss';

import { useContext } from 'react';

import { TxnContext } from '../../../providers/TransactionProvider';

export default function TransactionList() {
  const { transactions } = useContext(TxnContext);

  return (
    <section className='transaction-list'>
      <h3>Transaction List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Retailer</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr className='empty-list'>
              <td colSpan={4}>Please add transactions</td>
            </tr>
          ) : (
            transactions.map((txn) => {
              return (
                <tr key={txn.id}>
                  <td>{txn.id}</td>
                  <td>{txn.date}</td>
                  <td>{txn.amount}</td>
                  <td>{txn.retailer}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </section>
  );
}
