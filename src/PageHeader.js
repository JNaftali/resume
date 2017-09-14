import React from 'react';
import { primaryTextColor } from './style';

const style = {
  color: primaryTextColor,
  marginTop: 0,
};

export default function PageHeader({ children }) {
  return (
    <h1 style={style}>
      {children}
    </h1>
  );
}
