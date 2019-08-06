import actions from './actions';

const initialState = {
  fetchLoading: false,
  addLoading: false,
  todos: [],
  error: null,
};

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_TODO_REQUEST:
      return {
        ...state,
        fetchLoading: true,
        error: null,
      };
    case actions.FETCH_TODO_SUCCESS:
      return {
        ...state,
        fetchLoading: false,
        todos: payload,
        error: null,
      };
    case actions.FETCH_TODO_FAIL:
      return {
        ...state,
        fetchLoading: false,
        error: payload,
      };
    case actions.ADD_TODO_REQUEST:
      return {
        ...state,
        addLoading: true,
        error: null,
      };
    case actions.ADD_TODO_SUCCESS:
      return {
        ...state,
        addLoading: false,
        todos: {
          ...state.todos,
          payload,
        },
        error: null,
      };
    case actions.ADD_TODO_FAIL:
      return {
        ...state,
        addLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
