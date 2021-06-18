import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { ListItem, Button, PricingCard, Avatar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [
    {
      name: 'Chocolate',
      avatar_url: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      subtitle: '3 leches'
    },
    {
      name: 'Naranja',
      avatar_url: 'https://images.unsplash.com/photo-1611178240324-ce6859180a5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFyYW5qYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      subtitle: 'Seco'
    },
    {
        name: 'Durazno',
        avatar_url: 'https://images.unsplash.com/photo-1600707482842-ea7ec73daa90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        subtitle: 'Seco'
    },
    {
        name: 'Zanahoria',
        avatar_url: 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        subtitle: 'Seco'
    },
    {
        name: 'Cafe',
        avatar_url: 'https://images.unsplash.com/photo-1551610290-e153ec567dd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        subtitle: '3 Leches'
    },
    {
        name: 'Vainilla',
        avatar_url: 'https://images.unsplash.com/photo-1547060037-a9b0a6be328c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFuaWxsYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        subtitle: '3 Leches'
    },
     
   
  ]
export default function DisenioPan(){

    const navigation = useNavigation();
    
    return(
        <ScrollView centerContent={true} styles={styles.viewBody}>
            <View>
                {
                  list.map((l, i) => 
                    (
                      <ListItem key={i} bottomDivider onPress={() => navigation.navigate("pedido")}>
                        <Avatar source={{uri: l.avatar_url}} />
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                        </ListItem>
                    )
                  )
                }
                
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#E88B8B",
    borderRadius: 10
  },
  btnContainer: {
    width: "50%"
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30
  }
});