import React from 'react';
import axios from 'axios';
import { View, Text,ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';


const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { item } = route.params;

 console.log(item)

  return (
    <View style={{ padding: 20 }}>
      <ScrollView>

      <PostImage source={{ uri: item.image_url?item.image_url:'https://picsum.photos/200/300' }} />
      <PostText>
       {item.content}
      </PostText>
      </ScrollView>
    </View>
  );
};
// imageUrl={item.image_url?item.image_url:'https://picsum.photos/200/300'}
