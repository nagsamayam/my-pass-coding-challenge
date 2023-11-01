import { ReactNode, createContext, useState } from 'react';

import { Transaction, initialTransactions } from '../transactions.ts';

type Props = {
  children: ReactNode;
};

type TxnContextProps = {
  transactions: Array<Transaction>;
  addTransaction: (tx: Transaction) => void;
};

export const TxnContext = createContext<TxnContextProps>({} as TxnContextProps);

export default function TxnProvider({ children }: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addTransaction = (newTxn: Transaction) => {
    setTransactions([...transactions, newTxn]);
  };

  return <TxnContext.Provider value={{ transactions, addTransaction }}>{children}</TxnContext.Provider>;
}
