import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TransactionStatus from './pages/TransactionStatus';

import TxnProvider from './providers/TransactionProvider';
import Header from './components/ui/Header';

function App() {
  return (
    <>
      <Header>
        <h1>Transaction Analyser</h1>
      </Header>
      <main className='main'>
        <TxnProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/transaction-status' element={<TransactionStatus />} />
            </Routes>
          </Router>
        </TxnProvider>
      </main>
    </>
  );
}

export default App;
