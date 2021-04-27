/** Dependencies */
import React, { ReactElement } from 'react';

/** Props interface */
interface Props {
  children: ReactElement;
  htmlFor: string;
}

/** Component */
const Label: React.FunctionComponent<Props> = ({
  children,
  htmlFor,
}: Props) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

/** Export */
export default Label;
