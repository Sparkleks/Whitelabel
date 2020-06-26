import {base, colorOptions, darkTheme, lightTheme} from '../../styles/Theme';

const initialState = {
  theme: {...base, ...lightTheme, ...colorOptions.blue},

  // theme: {...base, ...lightTheme, ...colorOptions.orange},

  // theme: {...base, ...darkTheme, ...colorOptions.orange},

  // theme: {...base, ...darkTheme, ...colorOptions.purple},
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return;
    default:
      return state;
  }
};

export default themeReducer;
