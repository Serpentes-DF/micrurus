import React from 'react';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/Header/header';
import Menu from '@/components/ui/Menu/menu';

const Home: React.FC = () => {
  return (
      <div style={{position: 'relative'}}>
        <Header />
        <Menu />
        <h1>Home!</h1>
        <Footer />
      </div>
  );
};

export default Home;
