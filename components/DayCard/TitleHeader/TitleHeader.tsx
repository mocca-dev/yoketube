import { HTMLAttributes } from 'react';
import styles from './titleHeder.module.css';

interface TitleHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const TitleHeader = ({ title }: TitleHeaderProps) => (
  <h3 className={styles.container}>{title}</h3>
);

export default TitleHeader;
