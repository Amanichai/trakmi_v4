import React, {useState, useContext} from 'react';
import {View, StyleSheet } from 'react-native';
import {Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({ navigation })=>{
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
            <View style={styles.container}>
                <Spacer>
                    <Text h3 style={styles.header}>Sign up for Trakmi</Text>
                </Spacer>
                    <Input
                        label='email'
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        autoCorrect={false}
                    ></Input>
                <Spacer />
                    <Input
                        secureTextEntry
                        label='password'
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                    ></Input>
                    {state.errorMessage ? <Text style={styles.errorMsg}>{state.errorMessage}</Text> : null}
                <Spacer>
                    <Button
                        title='Signup'
                        onPress={()=>signup({email, password})}
                    ></Button>
                </Spacer>
            </View>
            )
}

SignupScreen.navigationOptions = ()=>{
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
    header: {
        textAlign: 'center'
    },

    errorMsg: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15
    }
});

export default SignupScreen;