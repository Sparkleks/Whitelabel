import React from 'react';
import {WebView} from 'react-native-webview';

class WebScenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: this.props.route.params,
    };
  }

  statusPost = message => {
    const {navigation} = this.props;
    var post = this.state.params.post;
    post.status = message;
    this.props.route.params.onGoBack();
    navigation.goBack();
  };

  render() {
    const {params} = this.state;
    return (
      <WebView
        source={{uri: params.query}}
        bounces={false}
        onMessage={event => {
          this.statusPost(event.nativeEvent.data);
        }}
      />
    );
  }
}

export default WebScenes;
