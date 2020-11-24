import React from "react";
import { MainLayout } from "components/layout";
import { About, Contact, Footer, Header, Navigation, Portfolio } from "components/main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

library.add(faExternalLinkSquareAlt, faGithubSquare);

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