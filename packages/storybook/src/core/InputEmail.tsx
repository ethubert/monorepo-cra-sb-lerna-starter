import React, { ReactElement } from 'react';

export interface InputEmailProps {
  /**
   * What background color to use
   */
  bgColor?: string;
}

/**
 * Text input for emails
 */
export const InputEmail: React.FC<InputEmailProps> = ({ bgColor = 'transparent' }) => {
  return <input style={{ backgroundColor: bgColor }} type="text" placeholder="Email"></input>;
};
