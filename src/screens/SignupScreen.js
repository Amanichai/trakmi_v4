import React from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import { NavigationActions, NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation })=>{
    return <>
                <Text style={{fontSize: 28, textAlign: 'center'}}>SignupScreen</Text>
                <Button
                    title='Go to Signin'
                    onPress={()=> navigation.navigate('Signin')}
                ></Button>
                <Button
                    title='Go to Mainflow'
                    onPress={()=> navigation.navigate('mainFlow')}
                ></Button>
            </>
}

const styles = StyleSheet.create({

});

export default SignupScreen;