/** Dependencies */
import React from 'react';

/** Props interface */
interface Props {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
}

/** Component */
const Input: React.FunctionComponent<Props> = ({
  id,
  onChange,
  onKeyDown,
  type,
  value,
}: Props) => {
  /** Render */
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

/** Export */
export default Input;
