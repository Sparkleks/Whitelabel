import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Container = styled.TouchableOpacity`
  display: flex;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR_LIGHT};
  margin: 4px;
  padding: 4px;
  overflow: hidden;
  border-radius: 5px;
`;

const StatusView = styled.View`
  display: flex;
  background-color: ${props => props.theme.PRIMARY_COLOR};
  height: 15px;
  width: 15px;
  margin: 5px;
  border-radius: 7.5px;
  align-self: center;
  border: 1px;
  border-color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
`;

const HideView = styled.View`
  display: flex;
  border-radius: 5px;
  align-self: center;
`;

const Header = styled.View`
  display: flex;
  padding: 4px;
  overflow: hidden;
  border-radius: 5px;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledText = styled.Text`
  flex: 1;
  display: flex;
  font-size: 18px;
  overflow: hidden;
  margin: 0px;
  font-weight: bold;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const IDTextStyle = styled.Text`
  flex: 1;
  display: flex;
  font-size: 18px;
  overflow: hidden;
  margin: 0px;
  font-weight: bold;
  text-align: right;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const BodyText = styled.Text`
  display: flex;
  font-size: 18px;
  overflow: hidden;
  padding: 8px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

class Cell extends React.Component {
  render() {
    const {item, onPress} = this.props;
    return (
      <Container onPress={onPress}>
        <Header>
          {item.status === 'pinned' ? <StatusView /> : <HideView />}
          <StyledText numberOfLines={1} ellipsizeMode="tail">
            {item.title.toString().substring(0, 40)}
          </StyledText>
          <IDTextStyle>{'iD: ' + item.id}</IDTextStyle>
        </Header>
        <BodyText numberOfLines={2} ellipsizeMode="tail">
          {item.body.toString().substring(0, 100)}
        </BodyText>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default connect(mapStateToProps)(Cell);
