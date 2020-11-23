import React from "react";
import { MainLayout } from "components/layout";
import { About, Contact, Footer, Header, Navigation, Portfolio } from "components/main";

const Index = () => {
  return (
    <MainLayout>
      <Navigation />
      <Header />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Footer />
    </MainLayout>
  );
};

export default Index;