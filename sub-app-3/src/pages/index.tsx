import React from 'react';
import styles from './index.less';
const Mf1Button = React.lazy(() => import("mf2/Index"));

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index
      <React.Suspense fallback='loading'>
        <Mf1Button />
      </React.Suspense></h1>
    </div>
  );
}
