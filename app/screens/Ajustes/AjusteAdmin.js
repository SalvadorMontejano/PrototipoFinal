import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import AjusteLista from '../../Componentes/Ajustes/AjusteLista';
//import Icon from 'react-native-vector-icons/FontAwesome';



export default function AjusteAdmin(){
    const navigation = useNavigation();
    return(

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>Ajustes Del Administrador</Text>

            <View style={styles.viewBtn}>
                <Button 
                    title="Agregar Postre"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("agregar-postre")}
                />
                <Button 
                    title="consultar Postres"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("consulta-postres")}
                />
           
                <Button 
                    title="Editar Postre"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("editar-postre")}
                />
                
          
                <Button 
                    title="Eliminar Postre"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("eliminar-postre")}
                />
              <AjusteLista
                elementos={list}
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
    backgroundColor: "#E88B8B",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20
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


const list = [
  {
    title: 'Agregar Postre',
    icon: 'plus-circle'
  },
  {
    title: 'Editar postre',
    icon: 'pencil-square-o'
  },
  {
    title: 'Eliminar Postre',
    icon: 'trash'
  },
  {
    title: 'Agregar Diseños',
    icon: 'birthday-cake'
  },
  {
    title: 'Cerrar Sesion',
    icon: 'sign-out'
  }
 
]

