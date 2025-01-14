import React, { PropsWithChildren, memo } from 'react';

import styles from '../Table.module.css';

const TableHeader = ({ children }: PropsWithChildren) => {
  return <thead className={styles.tableHeader}>{children}</thead>;
};

export default memo(TableHeader);
