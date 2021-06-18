import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AjusteLista(props){
return(
    <view>
         {
            props.elementos.map((item, i) => (
            <ListItem key={i} bottomDivider onPress={() =>alert(item.title)}>
                <Icon name={item.icon}  type="material-community"/>
                <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            ))
        }
    </view>
);

   

}