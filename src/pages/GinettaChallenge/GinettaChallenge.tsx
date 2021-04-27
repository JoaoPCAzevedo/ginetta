/** Dependencies */
import React, { useCallback, useEffect, useReducer, useState } from 'react';

/** External libs */
import axios from 'axios';

/** Organisms */
import ListQuestionsAnswers from '../../components/organisms/ListQuestionsAnswers';
import SearchUsers from '../../components/organisms/SearchUsers';
import { usersReducer } from './reducer';

/** Constants */
const API_ENDPOINT = 'https://api.github.com/search/users?q=';

const GinettaChallenge: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState(-1);
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const [users, dispatchUsers] = useReducer(usersReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const handlePressUpDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowUp' && selected >= 1) {
      setSelected(selected - 1);
    } else if (event.key === 'ArrowDown' && selected < users.data.length - 1) {
      setSelected(selected + 1);
    }
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    setSelected(-1);
    event.preventDefault();
  };

  const handleFetchUsers = useCallback(async () => {
    dispatchUsers({ type: 'USERS_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchUsers({
        type: 'USERS_FETCH_SUCCESS',
        payload: result.data,
      });
    } catch {
      dispatchUsers({ type: 'USERS_FETCH_FAILURE' });
    }
  }, [url]);

  useEffect(() => {
    if (searchTerm !== '') {
      handleFetchUsers();
    }
  }, [handleFetchUsers]);

  return (
    <>
      <SearchUsers
        users={users}
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
        onPressUpDown={handlePressUpDown}
        selected={selected}
      />
      <ListQuestionsAnswers />
    </>
  );
};

export default GinettaChallenge;
