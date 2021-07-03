import React from 'react';
import BaseHead from 'next/head';

interface IProps {
  title: string;
  icon?: string;
}

const Head: React.FC<IProps> = ({ title, icon }) => {
  return (
    <BaseHead>
      <title>{title}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
    </BaseHead>
  );
};

export default Head;
