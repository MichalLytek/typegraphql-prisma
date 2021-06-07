import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ThemedImage from "@theme/ThemedImage";

import styles from "@site/src/components/HomepageHeader.module.css";
import logoFullUrl from "@site/static/img/logo_full.png";
import useBaseUrl from "@docusaurus/useBaseUrl";

const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.logo}>
          <img
            alt="TypeGraphQL logo"
            className={styles.logoTypeGraphQL}
            src={logoFullUrl}
          />
          <ThemedImage
            alt="Prisma logo"
            className={styles.logoPrisma}
            sources={{
              light: useBaseUrl("/img/prisma_black.svg"),
              dark: useBaseUrl("/img/prisma_white.svg"),
            }}
          />
        </div>
        <h1 className={clsx("hero__title", styles.title)}>
          {siteConfig.title}
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explore Tutorial - 3 min ⏱
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
