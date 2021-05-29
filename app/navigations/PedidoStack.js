import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pedidos from "../screens/Pedidos/Pedido";

const Stack = createStackNavigator();

export default function PedidoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="pedido"
                component={Pedidos}
                options={{ title: "Mis Pedidos" }}
            />
        </Stack.Navigator>
    );
}