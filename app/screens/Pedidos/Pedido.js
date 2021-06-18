import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { ListItem, Button, PricingCard, Avatar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';


const list = [
  {
    name: 'Cupcake Chocolate',
    avatar_url: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    subtitle: 'Cantidad: 2'
  },
  {
    name: 'Brwnie Volcan',
    avatar_url: 'https://images.unsplash.com/photo-1606884285898-277317a7bf12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
    subtitle: 'Cantidad: 1'
  },
 
]

export default function Pedido(){
    const navigation = useNavigation();
    
    
    return(
      <ScrollView centerContent={true} styles={styles.viewBody}>
        
        <View>
            {
              list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar source={{uri: l.avatar_url}} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
            
            <Button 
              icon={
                <Icon
                  name="pencil-square-o"
                  size={20}
                  color="white"
                />}
              title="Cambiar direccion Envio"
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              //onPress={() => navigation.navigate("agregar-postre")}
            />

            <PricingCard
                color="#E88B8B"
                title="Total"
                price="$40"
                info={['Llevar a: Salvador', 'Domicilio: Leona vicario No 1', 'Centro','Al lado del taller de Bicis']}
                button={{ title: 'Finalizar Pedido', icon: 'money' }}
                
            />;         
            
            

                                 
     
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

  