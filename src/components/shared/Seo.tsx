import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

type TComponent = {
  title: string;
}

type TQuery = {
  site: {
    siteMetadata: {
      description: string;
      url: string;
    };
    buildTime: string;
  };
}

const SEO = ({ title }: TComponent) => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      site {
        siteMetadata {
          description, url
        }
        buildTime
      }
    }
  `);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <link rel="canonical" href={data.site.siteMetadata.url} />
      <link rel="author" href="https://www.linkedin.com/in/tamasnvk/" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="tamasnvk:generated" content={data.site.buildTime} />
    </Helmet>
  );
};

export default SEO;