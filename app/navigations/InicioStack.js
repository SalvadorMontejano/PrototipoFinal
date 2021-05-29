import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicios from "../screens/Inicio/InicioPostre";
import IniciosAgregar from "../screens/Inicio/InicioPostreAgregar";
import IniciosBorrar from "../screens/Inicio/InicioPostreBorrar";
import IniciosDetalle from "../screens/Inicio/InicioPostreDetalle";
import InicioPostreEditar from "../screens/Inicio/InicioPostreEditar";


const Stack = createStackNavigator();

export default function InicioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="inicio"
                component={Inicios}
                options={{ title: "Nuevos Postres" }}
            />
            <Stack.Screen 
                name="inicioAgregar"
                component={IniciosAgregar}
                options={{ title: "agregar a Pedido" }}
            />
            <Stack.Screen 
                name="inicioBorrar"
                component={IniciosBorrar}
                options={{ title: "Borra postre" }}
            />
            <Stack.Screen 
                name="inicioDetalle"
                component={IniciosDetalle}
                options={{ title: "Detalles Pstre" }}
            />
            <Stack.Screen 
                name="inicioeditar"
                component={InicioPostreEditar}
                options={{ title: "Editar Postres" }}
            />
        </Stack.Navigator>
    );
}