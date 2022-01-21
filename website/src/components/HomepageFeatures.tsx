import React from "react";
import clsx from "clsx";

import styles from "@site/src/components/HomepageFeatures.module.css";
import prototypingSvg from "@site/static/img/icons/prototyping.svg";
import customizeSvg from "@site/static/img/icons/customize.svg";
import maximizeSvg from "@site/static/img/icons/maximize.svg";

type FeatureDefinition = {
  title: string;
  Svg: React.JSXElementConstructor<React.SVGProps<SVGElement>>;
  description: React.ReactNode;
};

const FeatureList: FeatureDefinition[] = [
  {
    title: "Good for Prototyping",
    Svg: prototypingSvg,
    description: (
      <>
        Designed from the ground up to be used to get your GraphQL CRUD API up
        and running quickly - even in under 5 minutes!
      </>
    ),
  },
  {
    title: "Easily Customizable",
    Svg: customizeSvg,
    description: (
      <>
        Configure which actions should be exposed, hide selected models fields,
        give alternative names to the types... and many more!
      </>
    ),
  },
  {
    title: "Extensible Design",
    Svg: maximizeSvg,
    description: (
      <>
        Reuse generated classes to create custom resolvers with ease. Combine
        them with generated CRUD resolvers to compose the GraphQL API of your
        dreams.
      </>
    ),
  },
];

const Feature: React.FC<FeatureDefinition> = ({ Svg, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
