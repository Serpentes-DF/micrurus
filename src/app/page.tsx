import React from 'react';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import Menu from '@/components/ui/Menu/menu';
import About from '@/components/layout/about/about';

const Home: React.FC = () => {
  return (
      <div style={{position: 'relative'}}>
        <Header />
        <Menu />
        <About/>
        <Footer />
      </div>
  );
};

export default Home;
