import React from 'react';

const LimitedText = ({ text }) => {
  const maxCharacters = 400;
  const limitedText = text.length > maxCharacters ? `${text.slice(0, maxCharacters)}...` : text;

  return <div className="limited-text">{limitedText}</div>;
};

export default LimitedText;
