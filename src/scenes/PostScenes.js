import React from 'react';
import {connect} from 'react-redux';
import styled, {ThemeProvider} from 'styled-components';

import Cell from '../components/molecules/Cell';
import Button from '../components/atoms/Button';

const FlatList = styled.FlatList`
  margin-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const ActivityIndicator = styled.ActivityIndicator`
  flex: 1;
`;

const StatusBar = styled.StatusBar``;

class PostScenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  resetList = () => {
    this.setState({isLoading: true});
    this.setState({postdata: []});
    this.getPostFromApi();
  };

  componentDidMount() {
    this.getPostFromApi();
  }

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
      });
  };

  render() {
    const {isLoading} = this.state;
    return (
      <ThemeProvider theme={this.props.theme}>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView>
          <Button title={'RESET'} onPress={() => this.resetList()} />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={this.props.postdata}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => <Cell item={item} />}
            />
          )}
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: !state.postReducer.postdata,
    postdata: state.postReducer.postdata,
    theme: state.themeReducer.theme,
  };
};

const setDynamicLinkParam = postdata => ({
  type: 'FETCH_POSTS',
  postdata,
});

const mapDispatchToProps = dispatch => {
  return {
    isUpdate: postdata => dispatch(setDynamicLinkParam(postdata)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostScenes);
