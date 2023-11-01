import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../ui/Section';
import FormControl from '../ui/FormControl';
import Button from '../ui/Button/Button';

const defaultFilters = {
  fromDate: '',
  toDate: '',
  retailer: '',
};

export default function TransactionFilters() {
  const id = React.useId();
  const [filters, setFilters] = React.useState(defaultFilters);

  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;
    setFilters((current) => {
      const next = { ...current } as any;
      next[key] = value;
      return next;
    });
  }

  function handleReset() {
    setFilters(defaultFilters);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (filters.fromDate === '' || filters.toDate === '' || filters.retailer === '') {
      alert('Please enter the details');
      return;
    }

    navigate({
      pathname: '/transaction-status',
      search: `?retailer=${filters.retailer}&from=${filters.fromDate}&to=${filters.toDate}`,
    });
  };

  return (
    <Section>
      <h3>Transaction Filters</h3>
      <form onSubmit={handleSubmit}>
        <FormControl id='fromDate' label='From date'>
          <input type='datetime-local' id='fromDate' name='fromDate' value={filters.fromDate} onChange={handleInputChange} />
        </FormControl>
        <FormControl id='toDate' label='To date'>
          <input type='datetime-local' id='toDate' name='toDate' value={filters.toDate} onChange={handleInputChange} />
        </FormControl>
        <FormControl id={`retailer-${id}`} label='Retailer'>
          <input id={`retailer-${id}`} name='retailer' value={filters.retailer} onChange={handleInputChange} />
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
