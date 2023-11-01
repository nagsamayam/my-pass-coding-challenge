import TransactionFilters from '../components/app/TransactionFilters';
import TransactionForm from '../components/app/TransactionForm';
import TransactionList from '../components/app/TransactionList';

export default function Home() {
  return (
    <>
      <TransactionForm />
      <TransactionList />
      <TransactionFilters />
    </>
  );
}
