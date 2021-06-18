import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar,Image  } from 'react-native-elements';

export default ({id, nomPostre, precio, cantidad, descripcion, onPress }) => {
    return (
        //<TouchableOpacity onPress={onPress} style={styles.container}>
        //    <Text style={styles.text}>
        //        {nomPostre+", $"+precio+", Existencia:"+cantidad+", "+descripcion}
        //    </Text>
        //</TouchableOpacity>
        <Card>
        <Card.Title>{nomPostre}<text> $</text>{precio}</Card.Title>
       
        <Card.Divider/>
                         
      <Card.Image source={require('../../../assets/cupcake.jpg')}>
          
          <Button
            icon={<Icon name='shopping-cart' color='#ffffff' />}
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            title='ORDENAR'
            onPress={() => navigation.navigate('inicioDetalle', 
            { id: item.id, nomPostre: item.nomPostre, precio: item.precio, cantidad: item.cantidad, descripcion: item.descripcion})}
          />
          <Text style={{marginBottom: 10}}>
           
            {descripcion}
          </Text>
        </Card.Image>
      </Card>
    )
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
    },
    container: {
        flex: 1,
        backgroundColor: '#E88B8B',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    }
  });
