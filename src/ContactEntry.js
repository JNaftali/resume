import React from 'react';

const mainStyle = {
  fontSize: '0.7em',
  display: 'flex',
  marginBottom: '0.5em',
};

const leftStyle = {
  flex: 1,
  maxWidth: '30%',
};

export default function ContactEntry({ children: text }) {
  const words = text.split(' ');

  return (
    <div style={mainStyle}>
      <span style={leftStyle}>
        {words.shift()}
      </span>
      <span>
        {words.join(' ')}
      </span>
    </div>
  );
}
