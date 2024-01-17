import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
    </View>
  )
}

export default Signup
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    title:{
        fontSize: 30,
        color: 'black',
        alignSelf:'center',
        fontWeight:600,
        marginTop:100
    },
    
})