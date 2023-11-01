import React from 'react';

import { TxnContext } from '../../providers/TransactionProvider';
import Section from '../ui/Section';
import FormControl from '../ui/FormControl';
import Button from '../ui/Button/Button';

const defaultTxn = {
  id: '',
  date: '',
  amount: '',
  retailer: '',
};

export default function TransactionForm() {
  const [transaction, setTransaction] = React.useState(defaultTxn);

  const { transactions, addTransaction } = React.useContext(TxnContext);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;
    setTransaction((current) => {
      const next = { ...current } as any;
      next[key] = value;
      return next;
    });
  }

  function handleReset() {
    setTransaction(defaultTxn);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (transaction.id === '' || transaction.date === '' || transaction.amount === '' || transaction.retailer === '') {
      alert('Invalid input');
      return;
    }

    const txnFound = transactions.find((txn) => txn.id === transaction.id);
    if (txnFound) {
      alert('Transaction ID should be unique, please choose another one');
      return;
    }

    const parsedDate = new Date(transaction.date);
    const formattedDate = parsedDate.toLocaleDateString() + ' ' + parsedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    addTransaction({
      id: transaction.id,
      date: formattedDate,
      amount: Number(transaction.amount),
      retailer: transaction.retailer,
    });

    setTimeout(() => alert('Transaction added successfully'), 100);
    handleReset();
  }

  return (
    <Section>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit} noValidate>
        <FormControl id='id' label='ID'>
          <input id='id' name='id' value={transaction.id} onChange={handleInputChange} />
        </FormControl>

        <FormControl id='date' label='Date'>
          <input type='datetime-local' id='date' name='date' value={transaction.date} onChange={handleInputChange} />
        </FormControl>

        <FormControl id='amount' label='Amount'>
          <input type='number' id='amount' name='amount' value={transaction.amount} onChange={handleInputChange} />
        </FormControl>

        <FormControl id='retailer' label='Retailer'>
          <input id='retailer' name='retailer' value={transaction.retailer} onChange={handleInputChange} />
        </FormControl>

        <div className='form-control-buttons'>
          <Button type='reset' onClick={handleReset}>
            Cancel
          </Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Section>
  );
}
