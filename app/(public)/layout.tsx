import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header/header';
import React, { Fragment } from 'react';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
