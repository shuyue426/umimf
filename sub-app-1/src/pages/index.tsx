import React from 'react';
import styles from './index.less';
const Button = React.lazy(() => import("../components/Button"));
const Table = React.lazy(() => import("./Table/index"));

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index<React.Suspense fallback='loading'>
        <Button/>
        <Table />
      </React.Suspense></h1>
    </div>
  );
}
