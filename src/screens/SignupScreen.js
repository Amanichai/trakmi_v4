import React, {useState} from 'react';
import {View, StyleSheet } from 'react-native';
import {Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation })=>{
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
                <Spacer>
                    <Button
                        title='Signup'
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
    }
});

export default SignupScreen;