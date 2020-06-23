import {base, colorOptions, darkTheme, lightTheme} from '../../styles/Theme';

const initialState = {
  theme: {...base, ...darkTheme, ...colorOptions.purlple},
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
