import React from "react";
import { MainLayout } from "components/layout";
import { About, AnchorSpace, Contact, Footer, Header, Navigation, Portfolio } from "components/main";
import { Seo } from "components/shared";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCodeBranch, faExternalLinkAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faCodeBranch, faExternalLinkAlt, faLinkedin, faPaperPlane);

const Index = () => {
  return (
    <MainLayout>
      <Seo title={"Portfolio Page"} />
      <Navigation />
      <Header />
      <AnchorSpace id={"about"} rowstart={3} rowend={4} />
      <About />
      <AnchorSpace id={"portfolio"} rowstart={5} rowend={6} />
      <Portfolio />
      <AnchorSpace id={"contact"} rowstart={8} rowend={9} />
      <Contact />
      <Footer />
    </MainLayout>
  );
};

export default Index;