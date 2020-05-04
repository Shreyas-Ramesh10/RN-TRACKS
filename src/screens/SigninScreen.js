import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import NavLink from './components/NavLink';
import AuthForm from './components/AuthForm';
import {Context} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = ({ navigation }) => {
    const { state, Signin ,clearErrorMessage } = useContext(Context);
    return (
        <View style = {Styles.continer}>
            
            <NavigationEvents onWillFocus = {clearErrorMessage}/>
            
            <AuthForm
            headerText = "Sign In for Tracker"
            errorMessage ={state.errorMessage}
            submitButtonText ="Sign In"
            onSubmit ={Signin}
            />
          <NavLink
           text = "Dont have an Account? Sign up for Tracker"
           routeName = "Signup"
          />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
    headerShown : false
    };
};

const Styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: "center",
        marginBottom: 250,
    },
});

export default SigninScreen;