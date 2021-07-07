import React from "react";

import styles from "@site/src/components/VideoIntroduction.module.css";

const VideoIntroduction: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.player}
        src="https://www.youtube.com/embed/v6cNeHCfSHs"
        title="Autogenerate GraphQL API from Prisma schema - Michał Lytek | Prisma Day 2021"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default VideoIntroduction;
