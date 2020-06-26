import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';

import PostScenes from '../scenes/PostScenes';
import WebScenes from '../scenes/WebScenes';

const Stack = createStackNavigator();

class Navigation extends React.PureComponent {
  render() {
    const {theme} = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="post_scenes">
          <Stack.Screen
            name="post_scenes"
            component={PostScenes}
            options={{
              title: 'Posts',
              headerTintColor: theme.PRIMARY_TEXT_COLOR,
              headerStyle: {
                backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
              },
            }}
          />
          <Stack.Screen
            name="web_scenes"
            component={WebScenes}
            options={{
              title: 'WebView',
              headerTintColor: theme.PRIMARY_TEXT_COLOR,
              headerStyle: {
                backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default connect(mapStateToProps)(Navigation);
