/** Dependencies */
import React from 'react';
import styled from 'styled-components';

/** Interfaces/Types */
import { User } from '../../pages/GinettaChallenge/reducer';

/** Atoms */
import Image from '../atoms/Image';

/**
 * Props interface
 */
interface Props {
  active?: boolean;
  className?: string;
  item: User;
  searchTerm: string;
}

/** Styles */
const A = styled.a`
  text-decoration: none;
`;

const SearchTerm = styled.span`
  color: black;
  font-weight: 500;
`;

const LoginName = styled.span``;

/** Component */
const SearchResult: React.FunctionComponent<Props> = ({
  className,
  item,
  searchTerm,
}: Props) => {
  const login = item.login.toLowerCase();
  const splitLogin = login.split(searchTerm);

  return (
    <div className={className}>
      <span>
        <A href={item.html_url}>
          <SearchTerm>{searchTerm}</SearchTerm>
          <LoginName>{splitLogin[1]}</LoginName>
        </A>
      </span>
      <Image src={item.avatar_url} alt={item.login} />
    </div>
  );
};

/**
 * Export
 */
export default SearchResult;
