import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style = {{fontSize : 50 }}>Track List Screen</Text>
            <Button 
            title="Go to track detail screen" 
            onPress = {() => navigation.navigate('TrackDetail')} 
            />
        </>
    );
};

const Styles = StyleSheet.create ({});

export default TrackListScreen;