/** Dependencies */
import React from 'react';
import styled, { css } from 'styled-components';

/** Interfaces/Types */
import { User, UsersState } from '../../pages/GinettaChallenge/reducer';

/** Atoms */
import Row from '../atoms/Row';

/** Molecules */
import SearchBox from '../molecules/SearchBox';
import SearchResult from '../molecules/SearchResult';

/** Props interface */
interface Props {
  users: UsersState;
  searchTerm: string;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onPressUpDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  selected?: number;
}

/** Styles */
const Floating = styled(Row)`
  width: 50vh;
  height: 90vw;
  position: absolute;
  top: 50px;
  left: 10px;
  display: inline-grid;
  text-align: center;
  padding: 10px;
  background-color: lightgrey;
  overflow: auto;
`;

const StyledSearchResult = styled(SearchResult)`
  border-bottom: 1px solid grey;

  ${({ active }) =>
    active &&
    css`
      background: beige;
    `}

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

/** Component */
const SearchUsers: React.FunctionComponent<Props> = ({
  users,
  searchTerm,
  onSearchInput,
  onSearchSubmit,
  onPressUpDown,
  selected,
}: Props) => {
  return (
    <>
      <Row>
        <SearchBox
          searchTerm={searchTerm}
          onSearchInput={onSearchInput}
          onSearchSubmit={onSearchSubmit}
          onPressUpDown={onPressUpDown}
        />
      </Row>
      {users.data.length > 0 && searchTerm !== '' && (
        <Floating>
          {users.isError && <p>Something went wrong...</p>}
          {users.isLoading ? (
            <p>Loading....</p>
          ) : (
            <>
              {users.data.map((item: User, key: number) => (
                <StyledSearchResult
                  key={item.id}
                  item={item}
                  active={selected === key ? true : false}
                  searchTerm={searchTerm}
                />
              ))}
            </>
          )}
        </Floating>
      )}
    </>
  );
};

/** Export */
export default SearchUsers;
