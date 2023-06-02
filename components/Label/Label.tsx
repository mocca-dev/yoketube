import { HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  name: string;
}

export const Label = ({ text, name }: LabelProps) => (
  <label htmlFor={name}>{text}</label>
);

export default Label;
