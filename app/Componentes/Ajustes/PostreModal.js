import React,{useState} from 'react';
import { StyleSheet, View, Text ,Modal, Alert, Pressable} from "react-native";


export default function PostreModal(props){
    
    const {modalVisible, setModalVisible} = useState(false);

    return(
    
    <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
        
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{props.cvePostre}</Text>
                <Text style={styles.modalText}>{props.nomPostre}</Text>
                <Text style={styles.modalText}>{props.precio}</Text>
                <Text style={styles.modalText}>{props.descripcion}</Text>
                <Text style={styles.modalText}>{props.cantidad}</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    //onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>OK !</Text>
                </Pressable>
            </View>
        </View>
        </Modal>  
              
    </View>
        
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