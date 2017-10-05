import React from 'react';
import { flavorColor } from './style';

const underline = {
  backgroundColor: flavorColor,
  width: '2em',
  height: '0.1em',
  margin: '0.5em 0',
};

export default function SectionHeader({ children }) {
  return (
    <h3>
      {children}
      <div style={underline} />
    </h3>
  );
}
