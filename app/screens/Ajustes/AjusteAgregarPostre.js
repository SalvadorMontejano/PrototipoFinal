import React,{useState} from 'react';
import { StyleSheet, View, Text ,Modal, Alert, Pressable,ScrollView} from "react-native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AjusteAgregarFormulario from "./../../Componentes/Ajustes/AjusteAgregarForm";


export default function AjusteAgregarPostre(){

  return(
    
    <AjusteAgregarFormulario name="Capturar postres"/>
  );
}