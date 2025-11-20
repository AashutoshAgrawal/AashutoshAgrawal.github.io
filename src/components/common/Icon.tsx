import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size, className }) => {
  return React.createElement(IconComponent as any, { size, className });
};

export default Icon;
