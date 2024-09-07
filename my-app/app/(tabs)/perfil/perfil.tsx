import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HrefButton from '@/components/HrefButton';
import { useLocalSearchParams } from 'expo-router';


const perfil = () => {
  const {user = 'usuario'} = useLocalSearchParams(); //nombre por defecto: usuario
  return (
    <View style={styles.container}>
        <Text>Bienvenido {user}</Text>
        <HrefButton text="Update" route="/perfil/updatePerfil" />
    </View>
  )
}

export default perfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})