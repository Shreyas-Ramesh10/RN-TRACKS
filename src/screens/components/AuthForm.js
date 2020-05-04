import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from './Spacer'

const AuthForm  = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

return(
    <View>
    <Spacer>
    <Text h2> {headerText} </Text>
    </Spacer>
    <Spacer/>
    <Input 
    label = " Enter your Email Address"
    value = {email}
    onChangeText = {setEmail} //The value won't need to be added to newEmail cuz it can be set to setMail directly 
    autoCapitalize = "none"
    autoCorrect = {false}
    />
    <Spacer/>
    <Input 
    label = "Enter your Password"
    value = {password}
    onChangeText = {(newPassword) => setPassword(newPassword)} //Used this because to be able to differentiate between them
    autoCapitalize = "none"
    autoCorrect = {false}
    secureTextEntry
    /> 
    <Spacer>
    
{errorMessage ? <Text style = {styles.errorMessage}>{errorMessage}</Text> : null} 
   
    <Button title = {submitButtonText} onPress = {() => onSubmit({ email, password })}/>
    </Spacer> 
    </View>
);
};

const styles = StyleSheet.create({
    errorMessage: {
        marginLeft: 15,
        marginBottom: 15,
        fontSize: 13,
        color: 'red'
    },
});

export default AuthForm;