/** Dependencies */
import React from 'react';

/** Props interface */
interface Props {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

/** Component */
const Button: React.FunctionComponent<Props> = ({
  children,
  disabled,
  onClick,
}: Props) => {
  return (
    <button disabled={disabled} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

/** Export */
export default Button;
