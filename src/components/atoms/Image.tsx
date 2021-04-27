/** Dependencies */
import React from 'react';

/** Props interface */
interface Props {
  alt: string;
  src: string;
}

/** Component */
const Image: React.FunctionComponent<Props> = ({ alt, src }: Props) => {
  /** Render */
  return <img src={src} alt={alt} />;
};

/** Export */
export default Image;
