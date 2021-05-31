import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { Button } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar  } from 'react-native-elements'
export default function InicioPostre(){
    const navigation = useNavigation();
    return(
      
        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>Bienvenido Julitas postres y mas</Text>

              <View style={styles.viewBtn}>
                              
                <Card>
                  <Card.Title>Cupcake Chocolate $10</Card.Title>
                  <Card.Divider/>
                      <Card.Image source={require('../../../assets/cupcake.jpg')}>
                    
                    <Button
                      icon={<Icon name='shopping-cart' color='#ffffff' />}
                      buttonStyle={styles.btnStyle}
                      containerStyle={styles.btnContainer}
                      title='ORDENAR'
                      onPress={() => navigation.navigate("inicioDetalle")}
                    />
                    <Text style={{marginBottom: 10}}>
                      Cupcake de chocolate con merengue de chocolate.
                    </Text>
                  </Card.Image>
                </Card>

                <Card>
                  <Card.Title>Bronie Volcan    $20</Card.Title>
                  <Card.Divider/>
                  <Card.Image source={require('../../../assets/BrownieVolcan.jpg')}>
                  <Button
                      icon={<Icon name='shopping-cart' color='#ffffff' />}
                      buttonStyle={styles.btnStyle}
                      containerStyle={styles.btnContainer}
                      title='ORDENAR' 
                      onPress={() => navigation.navigate("inicioDetalle")}                    
                    />
                    <Text style={{marginBottom: 10}}>
                    Brownie de chocolate con elado sabor vainila.        .
                    </Text>
                    
                  </Card.Image>
                </Card>

                <Card>
                  <Card.Title>Cheese cake      $25</Card.Title>
                  <Card.Divider/>
                  <Card.Image source={require('../../../assets/cheeseCake.jpg')}>
                  <Button
                      icon={<Icon name='shopping-cart' color='#ffffff' />}
                      buttonStyle={styles.btnStyle}
                      containerStyle={styles.btnContainer}
                      onPress={() => navigation.navigate("inicioDetalle")}
                      title='ORDENAR' 
                    />
                    <Text style={{marginBottom: 10}}>
                      Chesse Cake con mermelada de tu preferencia.      .
                    </Text>
                    
                  </Card.Image>
                </Card>

               
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