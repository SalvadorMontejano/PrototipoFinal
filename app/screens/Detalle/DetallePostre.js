import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Input,Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Detalle(){
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true} styles={styles.viewBody}>
          <Text style={styles.textTitle}>Detalles Postre</Text>
            <View style={styles.viewBtn}>
            
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
      width: "20%"
    },
    viewBtn: {
      flex: 1,
      alignItems: "center",
      marginBottom: 30
    }
  });
