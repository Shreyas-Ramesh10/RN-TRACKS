import React,{ useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../screens/context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLink';



const SignupScreen = ({ navigation }) => {
    const { state, Signup, clearErroMessage } = useContext(AuthContext);

        return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus = {clearErroMessage} />
           <AuthForm
           headerText = "Sign up for Tracker"
           errorMessage ={state.errorMessage}
           submitButtonText ="Sign Up"
           onSubmit ={Signup} 
           />
          
        <NavLink
         text = "Already have an account? Sign in instead"
         routeName = "Signin"
        />
           </View>
          );
        };
        
        SignupScreen.navigationOptions = () => {
            return {
            headerShown: false
    };
};

const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: "center",
        marginBottom: 250,
    },
});

export default SignupScreen;