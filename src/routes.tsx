import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Wallet from './components/Wallet';
import SendOneLamportToRandomAddress from './components/SendOneLamportToRandomAddress';

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transaction" element={<SendOneLamportToRandomAddress />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
