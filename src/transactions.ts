export type Transaction = {
  id: string;
  date: string;
  amount: number;
  retailer: string;
};

export const initialTransactions: Transaction[] = [
  {
    id: 'WLMFRDGD',
    date: '20/08/2018 12:45',
    amount: 59.99,
    retailer: 'Kwik-E-Mart',
  },
  {
    id: 'YGXKOEIA',
    date: '20/08/2018 12:46',
    amount: 10.95,
    retailer: 'Kwik-E-Mart',
  },
  {
    id: 'LFVCTEYM',
    date: '20/08/2018 12:50',
    amount: 5.0,
    retailer: 'MacLaren',
  },
  {
    id: 'SUOVOISP',
    date: '20/08/2018 13:12',
    amount: 5.0,
    retailer: 'Kwik-E-Mart',
  },
  {
    id: 'JYAPKZFZ',
    date: '20/08/2018 14:07',
    amount: 99.5,
    retailer: 'MacLaren',
  },
];
