import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


interface Perfil {
  perfilName: string
}

const updatePerfil = () => {
  const [perfilName, setPerfilName] = React.useState('');

  return (
    <View style={styles.view} >
      <Text style={styles.text}>Actualizar Usuario</Text>
            <TextInput
              style={styles.input}
              value={perfilName}
              onChangeText={setPerfilName}
              placeholder="Enter perfil name"
            />   
      <Link
        style={styles.botonGuardar}
        href={{
          pathname: '/(tabs)/perfil/perfil',
          params: { user: perfilName  },
        }}>
        Guardar
      </Link> 
    </View>
  )
}

export default updatePerfil

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botonGuardar: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center'
  }
})