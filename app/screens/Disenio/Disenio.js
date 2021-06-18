import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button,Image,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Disenio(){  
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true} styles={styles.viewBody}>
          <View style={styles.viewBtn}>
            <Image
              source={require('../../../assets/JulitasLogo.png')}
              style={{ width: 300, height: 200 }}
            />
            <Text style={{marginBottom: 10}}>
              ¿Para cuantas Personas?
            </Text>
            
            <Input
              placeholder='Cantidad'
              leftIcon={
                <Icon
                  name='users'
                  size={24}
                  color='#E88B8B'
                />
              }
            />

            <Text style={{marginBottom: 10}}>
              ¿Cuantos Pasteles?
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

            <Text style={{marginBottom: 10}}>
              ¿Que forma tendra?
            </Text>
            
            <Button 
              icon={
                <Icon
                  name="cube"
                  size={20}
                  color="white"
                />
              }
              title="  Cuadrado"
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              onPress={() => navigation.navigate("disenio-pan")}
            />

            <Button 
              icon={
                <Icon
                  name="circle"
                  size={20}
                  color="white"
                />
              }
              title="  Circular"
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              onPress={() => navigation.navigate("disenio-pan")}
            />

            <Button 
              icon={
                <Icon
                  name="window-minimize"
                  size={20}
                  color="white"
                />
              }
              title="  Rectangular"
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              onPress={() => navigation.navigate("disenio-pan")}
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