import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button,ListItem, icon, Input,Divider,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function DetallePostre({route}){
    const navigation = useNavigation();
    const {id,nomPostre,precio,cantidad,descripcion}=route.params
    return(
        <ScrollView centerContent={true} styles={styles.viewBody}>
         
          
         
          
            <View style={styles.viewBtn}>
            <Tile
            imageSrc={require('../../../assets/cupcake.jpg')}
            style={styles.photo}
            title={nomPostre}
            featured
            caption={descripcion}
            
          ></Tile>;              
              <Button
                icon={
                  <Icon
                    name="heart"
                    size={20}
                    color="white"
                  />
                } 
                title="  Agregar a Favorito"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("favorito")}
              />
                
              <Text style={{marginBottom: 10}}>
               
                ¿Cuantas porciones vas a querer?
              </Text>
              <Input
                placeholder='Cantidad'
                leftIcon={
                  <Icon
                    name='birthday-cake'
                    size={24}
                    color='#E88B8B'
                  />
                }
              />
              <Button
                icon={
                  <Icon
                    name="shopping-cart"
                    size={20}
                    color="white"
                  />}
                  title="  Enviar pedidos"
                  buttonStyle={styles.btnStyle}
                  containerStyle={styles.btnContainer}
                  onPress={() => navigation.navigate("pedido")}
              />
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
      backgroundColor: "#E88B8B"
    },
    btnContainer: {
      width: "40%",
      marginBottom:10,
      marginTop:10
    },
    viewBtn: {
      flex: 1,
      alignItems: "center",
      marginBottom: 30
    },
    photo:{
      height:180,
      width:180,
      marginBottom:20,
      marginTop:20

    }
  });
