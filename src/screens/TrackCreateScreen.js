import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import Map from './components/Map';
import {SafeAreaView} from 'react-navigation';
import { requestPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location';
import '../_mockLocation';
import { Context as LocationContext } from './context/LocationContext';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext)
    const [err, setErr] = useState(null);
  
    const startWatching = async () => { 
    try {
        await requestPermissionsAsync();
        await watchPositionAsync({
            accuracy:Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
        }, (location) => {
            addLocation(location);
        });
    }catch (e) {
        setErr(e);
    }
};

useEffect(() => {
startWatching();
}, []);

    return (
        <SafeAreaView forceInset = {{ Top: 'always' }}>
            <Text h2> Create a track</Text>
            <Map/>
            {err ? <Text>Please enable your location</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
   
});

export default TrackCreateScreen;