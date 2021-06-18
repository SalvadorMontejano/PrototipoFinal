import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert,Modal,Pressable,StyleSheet, View, Text,ScrollView} from "react-native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//import fetch from "../../hooks/useFetch";
//import Icon from 'react-native-vector-icons/FontAwesome';
//import PostreMod from './PostreModal';

export default function AjusteAgregarForm(props){

    //const [cvePostre,setCvePostre] = useState();
    const [nomPostre,setNomPostre] = useState();
    const [precio,setPrecio] = useState();
    const [descripcion,setDescripcion] = useState();
    const [cantidad,setCantidad] = useState(); 
    const navigation = useNavigation();
    //const { loading, data: julitaspostres } = useFetch('http://localhost:3000/julitaspostres')
    //const [modalVisible, setModalVisible]=useState(false);
    return(      
        
        <ScrollView centerContent={true} styles={styles.viewBody}>      
            <View>
                <Text style={styles.textTitle}>{props.name}</Text>
                
                <Input
                    placeholder='Nombre'
                    leftIcon={<Icon name='birthday-cake' size={24} color='#E88B8B'/>}
                    onChange={(e) => setNomPostre(e.nativeEvent.text)}
                />

                <Input
                    placeholder='Precio'
                    leftIcon={<Icon name='usd' size={24} color='#E88B8B'/>}
                    onChange={(e) => setPrecio(e.nativeEvent.text)}
                />               

                <Input
                    placeholder='Cantidad'
                    leftIcon={<Icon name='cubes' size={24} color='#E88B8B'/>}
                    onChange={(e) => setCantidad(e.nativeEvent.text)}
                />

                <Input
                    placeholder='Descripcion'
                    leftIcon={<Icon name='bars' size={24} color='#E88B8B'/>}
                    onChange={(e) => setDescripcion(e.nativeEvent.text)}
                />
            
                <Button
                    icon={<Icon name="floppy-o" size={20} color="white"/>}
                    title="Guardar"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                      fetch('http://localhost:3000/julitaspostres/', {
                            method: 'POST',
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
                          setCantidad('Escribe la cantidad de postres ...');
                          setDescripcion();
                          setDescripcion('Escriba la descripcion...')
                          alert('Postre agregado'+' '+nomPostre+' '+precio+' '+cantidad+''+descripcion);                          
                          //navigation.navigate(AjusteAdmin);
                        })
                      }
                    }
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