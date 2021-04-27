/** Dependencies */
import React, { ChangeEvent } from 'react';

/** Props interface */
interface Props {
  children: React.ReactNode;
  onSubmit?: (event: ChangeEvent<HTMLFormElement>) => void;
}

/** Component */
const Form: React.FunctionComponent<Props> = ({
  children,
  onSubmit,
}: Props) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

/** Export */
export default Form;
