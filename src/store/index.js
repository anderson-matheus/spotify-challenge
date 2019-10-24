import { createStore } from 'redux';

const INITIAL_STATE = {
  searchValue: '',
  requests: [],
  activeMusic: '',
};

function spotify(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchValue: action.search };
    case 'REQUESTS':
      return { ...state, requests: action.request };
    case 'ACTIVE_MUSIC':
      return { ...state, activeMusic: action.track };
    default:
      return state;
  }
}

const store = createStore(spotify);

export default store;
