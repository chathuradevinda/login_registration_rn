import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Profile extends React.Component {
    render() {
    return (
         <View style={styles.container}>
                <Text style={styles.header}> Welcome to the member area </Text>
        </View>


    );
  }


} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#2896d3'
    },
    text:{
        color: '#fff'
    }
});
