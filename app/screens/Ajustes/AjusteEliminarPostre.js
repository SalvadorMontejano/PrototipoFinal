import React,{useState} from 'react';
import { Image, StyleSheet, Text, View,ScrollView } from "react-native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import { Header } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AjusteEliminarPostre(){
    const navigation = useNavigation();
    const [cvePostre,setCvePostre] = useState();
    return(
        <ScrollView centerContent={true} styles={styles.viewBody}>      
            <View style={styles.main}>
                <Text style={styles.textTitle}>
                    Busca el postre a eliminar
                </Text>
                <Input
                    placeholder='Ingresa la clave del Postre'
                    leftIcon={<Icon name='key' size={24} color='#E88B8B'/>}
                    onChange={(e) => setCvePostre(e.nativeEvent.text)}
                />
                <Button
                    icon={<Icon name="search" size={20} color="white"/>}
                    title="Buscar"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate('editar-postre-Busqueda', {cvePostre:cvePostre})}
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
    btnStyle: {
      backgroundColor: "#E88B8B"
    },
    btnContainer: {
      width: "100%",
      marginBottom: 5,
      marginTop: 5
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
    },
    photo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 20
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      main: {
        flex: 1,
        margin: 40,
      },
    
      image: {
        width: 300,
        height: 200,
       
      },  
  });