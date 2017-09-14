import React from 'react';
import { flavorColor } from './style';

export default function SkillCounter({ children, number = 0 }) {
  const max = 5;
  const count = Math.min(max, number);
  const circles = [];
  for (let i = 0; i < max; i += 1) {
    circles.push(<circle cx={i * 20 + 10} cy={10} r={8} fill={flavorColor} />);
  }
  return (
    <div style={{ display: 'flex' }}>
      <span style={{ flex: 1 }}>
        {children}
      </span>
      <svg style={{ width: '10em', height: '2em' }} viewBox="0 0 100 20">
        {circles}
      </svg>
    </div>
  );
}
