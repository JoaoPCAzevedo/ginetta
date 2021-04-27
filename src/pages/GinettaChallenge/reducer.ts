/** Data Interfaces */
export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
type Users = User[];

/** Component Interfaces */
export interface UsersState {
  data: Users;
  isLoading: boolean;
  isError: boolean;
}

/** Reducer Interfaces */
interface UsersFetchInitAction {
  type: 'USERS_FETCH_INIT';
}

interface UsersFetchSuccessAction {
  type: 'USERS_FETCH_SUCCESS';
  payload: {
    items: Users;
  };
}

interface UsersFetchFailureAction {
  type: 'USERS_FETCH_FAILURE';
}

type UsersActions =
  | UsersFetchInitAction
  | UsersFetchSuccessAction
  | UsersFetchFailureAction;

/** Reducer */
export const usersReducer = (
  state: UsersState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case 'USERS_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'USERS_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.items,
      };
    case 'USERS_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};
