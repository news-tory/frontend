import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SAVE_RESPONSE_DATA } from './authTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SAVE_RESPONSE_DATA:
      return {
        ...state,
        accessToken: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: '',
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLoggedIn', 'accessToken'], // 유지할 상태 이름 지정
};

export default persistReducer(persistConfig, authReducer);
