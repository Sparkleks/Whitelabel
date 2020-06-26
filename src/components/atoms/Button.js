import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const TouchableOpacity = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: ${props => props.theme.PRIMARY_COLOR};
  justify-content: center;
  align-items: stretch;
  elevation: 1
  border-radius: 5px;
  height: 50px;
  margin-right: 14px;
  margin-left: 14px;
`;

const Text = styled.Text`
  text-align: center;
  color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_LARGE};
`;

class Button extends React.Component {
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default connect(mapStateToProps)(Button);
