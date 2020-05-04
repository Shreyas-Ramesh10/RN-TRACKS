import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from './components/Spacer';
import {Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';


const AccountScreen = () => {
    const { Signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset = {{ top: 'always' }}>
        <View>
            <Text style = {{fontSize : 50 }}>Account Screen</Text>
            <Spacer>
            <Button title = "Sign out" onPress = {Signout}/>
            </Spacer>
        </View>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create ({});

export default AccountScreen;