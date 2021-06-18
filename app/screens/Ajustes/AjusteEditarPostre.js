import React,{useState} from 'react';
import { Image, StyleSheet, Text, View,ScrollView } from "react-native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import { Header } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AjusteEditarPostre(){
  const navigation = useNavigation();
  const [cvePostre,setCvePostre] = useState();

    return(
      <ScrollView centerContent={true} styles={styles.viewBody}>      
        <View style={styles.main}>
          <Text>
            Busca El postre a editar
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
    
        <View style={{flexDirection:'row', margin:20, justifyContent:"space-between"}}>
          <Image
            style={styles.image}
            source={{ uri: 'https://images.unsplash.com/photo-1609501967126-1a43c02f655c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}/>
          <Image
            style={styles.image}
            source={{ uri: 'https://images.unsplash.com/photo-1606884285898-277317a7bf12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd25pZSUyMGFuZCUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}/>
        </View>
        <View style={{flexDirection:'row', margin:20, justifyContent:"space-between"}}>
          <Image
            style={styles.image}
            source={{ uri: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80' }}/>
          <Image
          style={styles.image}
          source={{ uri: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' }}/>
        </View>
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