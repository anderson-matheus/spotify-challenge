import { createStore } from 'redux';

const INITIAL_STATE = {
  searchValue: '',
  requests: [],
};

function spotify(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchValue: action.search };
    case 'REQUESTS':
      return { ...state, requests: action.request };
    default:
      return state;
  }
}

const store = createStore(spotify);

export default store;
