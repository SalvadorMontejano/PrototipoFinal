import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicios from "./InicioStack";
import Favoritos from "./FavoritoStack";
import Disenios from "./DisenioStack";
import Pedidos from "./PedidoStack";
import Ajustes from "./AjusteStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
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
                  component={Ajustes}
                options={{ title: "AJUSTES" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}