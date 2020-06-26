import React, {Component} from 'react';
import styled from 'styled-components';
import Cell from '../../components/molecules/Cell';
import {baseURL} from '../../utils/Endpoint';

const ActivityIndicator = styled.ActivityIndicator`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
`;

const FlatList = styled.FlatList`
  margin-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  render() {
    const {isLoading, onGOBack, data, nav} = this.props;
    return (
      <Container>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => `item${index}`}
            renderItem={({item}) => (
              <Cell
                item={item}
                onPress={() =>
                  nav.navigate('web_scenes', {
                    query: `${baseURL}${item.id}`,
                    post: item,
                    onGoBack: onGOBack,
                  })
                }
              />
            )}
          />
        )}
      </Container>
    );
  }
}

export default List;
