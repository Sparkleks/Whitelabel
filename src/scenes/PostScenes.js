import React from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import styled, {ThemeProvider} from 'styled-components';
import Button from '../components/atoms/Button';
import List from '../components/organisms/List';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const StatusBar = styled.StatusBar``;

class PostScenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forLoading: true,
    };
  }

  componentDidMount() {
    this.retrieveData();
    console.disableYellowBox = true;
  }

  refresh = () => {
    const pinned = this.props.postdata
      .filter(a => a.status == 'pinned')
      .sort((a, b) => {
        return a.id - b.id;
      });

    const unpinned = this.props.postdata
      .filter(a => a.status == 'unpinned' || a.status == null)
      .sort((a, b) => {
        return a.id - b.id;
      });

    const postdata = pinned.concat(unpinned);
    this.setState({postdata: postdata});
    this.props.isUpdate(postdata);
    this.storeData(postdata);
  };

  storeData = async item => {
    try {
      await AsyncStorage.setItem('withStatus', JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  };

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('withStatus');
      if (value !== null) {
        const postdata = JSON.parse(value);
        this.setState({postdata: postdata});
        this.props.isUpdate(postdata);
      } else {
        this.getPostFromApi();
      }
    } catch (error) {
      console.log(error);
    }
  };

  removeStorage = keys => {
    AsyncStorage.multiRemove(keys, err => {
      console.log(err);
    });
  };

  resetList = () => {
    this.setState({isLoading: true});
    this.removeStorage(['withStatus']);
    this.getPostFromApi();
  };

  getPostFromApi = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        this.setState({postdata: json});
        this.props.isUpdate(json);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.setState({isLoading: false});
        this.refresh();
      });
  };

  render() {
    const {isLoading} = this.props;
    return (
      <ThemeProvider theme={this.props.theme}>
        {this.props.theme.PRIMARY_THEME_TYPE == 'darkTheme' ? (
          <StatusBar barStyle={'light-content'} />
        ) : (
          <StatusBar barStyle={'dark-content'} />
        )}
        <SafeAreaView>
          <Button title={'RESET'} onPress={() => this.resetList()} />
          <List
            isLoading={isLoading}
            data={this.props.postdata}
            onGOBack={this.refresh}
            nav={this.props.navigation}
          />
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: !state.postReducer.postdata,
    postdata: state.postReducer.postdata,
    postPinned: state.pinnedReducer.postPinned,
    theme: state.themeReducer.theme,
  };
};

const setDynamicLinkParam = postdata => ({
  type: 'FETCH_POSTS',
  postdata,
});

const setDynamicLinkParamTwo = postPinned => ({
  type: 'FETCH_PINNED',
  postPinned,
});

const mapDispatchToProps = dispatch => {
  return {
    isUpdate: postdata => dispatch(setDynamicLinkParam(postdata)),
    isPinned: postPinned => dispatch(setDynamicLinkParamTwo(postPinned)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostScenes);
