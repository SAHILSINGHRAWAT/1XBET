import React from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import SportsSection from './components/SportsSection';
import BetSlip from './components/BetSlip';
import Footer from './components/Footer';
import BettingTable from './components/BettingTable';

type Props = {};

function Home({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head >
        <title>1xBet Clone</title>
      </Head>
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          <SportsSection />
          <BettingTable />
        </main>
        <aside className="w-1/4 p-4">
          <BetSlip />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
