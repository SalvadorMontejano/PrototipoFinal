import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Inicios from "./InicioStack";
import Favoritos from "./FavoritoStack";
import Disenios from "./DisenioStack";
import Pedidos from "./PedidoStack";
import AjusteAdmin from "./AjusteAdminStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
          
            <Tab.Navigator
              
              initialRouteName="inicio"
              tabBarOptions={{
                inactiveTintColor: "#E88B8B",
                activeTintColor: "#5D5FEF"
              }}
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
              })}
            >
             
                <Tab.Screen
                    name="inicio"
                    component={Inicios}
                    options={{ title: "INICIO" }}
                />
                 <Tab.Screen
                    name="favorito"
                    component={Favoritos}
                    options={{ title: "FAVORITOS" }}
                />
                <Tab.Screen
                    name="disenio"
                    component={Disenios}
                    options={{ title: "DISEÑO" }}
                />
                <Tab.Screen
                    name="pedido"
                    component={Pedidos}
                    options={{ title: "PEDIDOS" }}
                />
                <Tab.Screen
                name="ajuste"
                  component={AjusteAdmin}
                options={{ title: "AJUSTES" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function screenOptions(route, color) {
    let iconName;
  
    switch (route.name) {
      case "inicio":
        iconName = "home";
        break;
      case "favorito":
        iconName = "bookmark";
        break;
      case "disenio":
        iconName = "plus-circle";
        break;
      case "pedido":
        iconName = "cart";
        break;
      case "ajuste":
        iconName = "cog";
        break;
      default:
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  }