import React from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation })=>{
    return <>
                <Text style={{fontSize: 28, textAlign: 'center'}}>TrackListScreen</Text>{}
                <Button
                    title='Go to Track Details'
                    onPress={()=> navigation.navigate('TrackDetails') }
                ></Button>
            </>
}

const styles = StyleSheet.create({

});

export default TrackListScreen;