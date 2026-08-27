import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white',
            }
        }}
        //  navigationBarColor: '#05192e


        >
            <Stack.Screen
                name="home/index"
                options={{
                    title: 'Home'
                }} />
            <Stack.Screen
                name="products/index"
                options={{
                    title: 'Productos',
                }} />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: 'Perfil '
                }} />
            <Stack.Screen
                name="settings/index"
                options={{
                    title: 'Ajustes'
                }} />

        </Stack>


    )
}

export default StackLayout