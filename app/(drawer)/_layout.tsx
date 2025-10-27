import { IconSymbol } from '@/components/ui/icon-symbol';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                drawerActiveTintColor: '#007AFF',
                drawerStyle: {
                    backgroundColor: 'white',
                },
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#007AFF',
                drawerLabelStyle: {
                    marginLeft: -10,
                },
            }}>
            <Drawer.Screen
                name="home"
                options={{
                    title: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="help"
                options={{
                    title: 'Help',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="help-circle-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
}