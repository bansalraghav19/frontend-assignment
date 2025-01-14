import React, { PropsWithChildren, memo } from 'react';

import styles from '../Table.module.css';

const TableCell= ({ children }: PropsWithChildren) => {
  return <td className={styles.tableCell}>{children}</td>;
};

export default memo(TableCell);
