import React from 'react';
import styles from './circle.module.scss';
import { ElementState } from '#shared/types';

interface CircleProps {
  state?: ElementState;
  letter?: string;
  head?: string | React.ReactElement | null | false;
  index?: number;
  tail?: string | React.ReactElement | null | false;
  tailType?: 'string' | 'element';
  extraClass?: string;
  isSmall?: boolean;
}

export const Circle = ({
  state = 'default',
  letter,
  head,
  index,
  tail,
  extraClass = '',
  isSmall,
}: CircleProps) => {
  return (
    <div className={`${styles.content} ${extraClass}`}>
      <div
        className={`text text_type_input text_color_input mb-4 ${styles.absolute} ${styles.head} ${
          styles[typeof head === 'string' ? 'string' : 'element']
        }`}>
        {head}
      </div>
      <div className={`${styles.circle}  ${isSmall ? styles.small : ''} ${styles[state]}`}>
        <p className={`text text_type_circle text_color_input ${styles.letter}`}>{letter}</p>
      </div>
      <p
        className={`text text_type_input text_color_input mt-4 ${styles.absolute} ${styles.index}`}>
        {index?.toString()}
      </p>
      <div
        className={`text text_type_input text_color_input mt-4 ${styles.absolute} ${
          index?.toString() ? styles.tail60 : styles.tail30
        } ${styles[typeof tail === 'string' ? 'string' : 'element']}`}>
        {tail}
      </div>
    </div>
  );
};
