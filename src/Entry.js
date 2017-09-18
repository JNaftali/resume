import React from 'react';

export default function Entry({ children }) {
  children = React.Children.toArray(children);
  const title = children.shift();
  return (
    <div>
      <div>
        {title}
      </div>
      {children}
    </div>
  );
}
