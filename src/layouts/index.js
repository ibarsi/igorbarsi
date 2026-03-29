import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Layout = ({ children }) => {
  return (
    <div className="site-shell">
      <Header />

      <main className="site-main">{children}</main>

      <Footer />
    </div>
  );
};
