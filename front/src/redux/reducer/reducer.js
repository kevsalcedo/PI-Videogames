//action-types:

import { GET_VIDEOGAMES } from "../actions/actions-types";

//initial state
let initialState = {
  videogames: []
};

//function reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
