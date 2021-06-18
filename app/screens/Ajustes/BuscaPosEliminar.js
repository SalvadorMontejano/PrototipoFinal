import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
import { View,StyleSheet,Text,TextInput,TouchableOpacity,ScrollView, } from "react-native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import useFetch from "../../hooks/useFetch";

export default function BuscaPosEliminar({route}) {
    const{cvePostre}=route.params;
    const [nomPostre,setNomPostre] = useState();
    const [precio,setPrecio] = useState();    
    const [cantidad,setCantidad] = useState();
    const [descripcion,setDescripcion] = useState();
    //const { loading, data: julitaspostres } = useFetch(`http://localhost:3000/julitaspostres/books?filter[where][id]=${cvePostre}`);
    const {loading, data: julitaspostres}= useFetch(`http://localhost:3000/julitaspostres?filter[where][id]=${cvePostre}`);
    const navigation = useNavigation();

  setNomPostre(julitaspostres.nomPostre);
  setPrecio(julitaspostres.precio);
  setCantidad(julitaspostres.cantidad);
  setDescripcion(julitaspostres.descripcion);
    

    return(      
        
        <ScrollView centerContent={true} styles={styles.viewBody}>      
            <View>
                <Text style={styles.textTitle}>{cvePostre}{}</Text>
                
                <Input
                    placeholder={nomPostre}
                    leftIcon={<Icon name='birthday-cake' size={24} color='#E88B8B'/>}
                    onChange={(e) => setNomPostre(e.nativeEvent.text)}
                />

                <Input
                    placeholder={precio}
                    leftIcon={<Icon name='usd' size={24} color='#E88B8B'/>}
                    onChange={(e) => setPrecio(e.nativeEvent.text)}
                />               

                <Input
                    placeholder={cantidad}
                    leftIcon={<Icon name='cubes' size={24} color='#E88B8B'/>}
                    onChange={(e) => setCantidad(e.nativeEvent.text)}
                />

                <Input
                    placeholder={descripcion}
                    leftIcon={<Icon name='bars' size={24} color='#E88B8B'/>}
                    onChange={(e) => setDescripcion(e.nativeEvent.text)}
                />
                <Button 
                title="Eliminar Postre"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  fetch(`http://localhost:3000/julitaspostres/${cvePostre}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      nomPostre: nomPostre,
                      precio: precio,
                      cantidad: cantidad,
                      descripcion: descripcion
                    })
                }).then(()=>{ 
                  setNomPostre();
                  setNomPostre('Escribe el nombre del postre ...');
                  setPrecio();
                  setPrecio('Escribe el precio del postre ...');
                  setCantidad();
                  setCantidad('Escribe la cantidad de Postres ...');
                  setDescripcion();
                  setDescripcion('Escribe una descripcion para el postre')
                  alert('Postre Eliminado'+' '+nomPostre+' '+precio+' '+cantidad+' '+descripcion);
                  navigation.navigate(producto-lista1);
                })
                }}
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
      }  
  });