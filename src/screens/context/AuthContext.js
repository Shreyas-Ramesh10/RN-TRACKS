
import CreateDataContext from './CreateDataContext';
import trackerApi from '../../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef'

 

const authReducer = (state, actions) => {
    switch(actions.type) {
        case 'add_error':
            return{ ...state, errorMessage : actions.payload};
        case 'signin':
            return{errorMessage:'', token: actions.payload};
        case 'clear_error_message':
            return{...state, errorMessage: '' };
        case 'signout':
            return { token:null, errorMessage: '' };
        default:
            return state;

    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    };
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type:'clear_error_message' });
};

const Signup = dispatch =>  async ({ email,password }) => {
        try{
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type:'signin', payload:response.data.token });
        navigate('TrackList');
         } catch(err){
            dispatch({ type:'add_error', payload:"Something went wrong with your details" });
        }
    };


const Signin = dispatch =>  async ({ email,password }) => {
    try{
    const response = await trackerApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type:'signin', payload:response.data.token });
    navigate('TrackList');
     } catch(err){
        dispatch({ type:'add_error', payload:"Something went wrong with your details" });
    }
};

const Signout = dispatch => async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('loginFlow');
    };


export const { Provider, Context } = CreateDataContext(
    authReducer,
    {
        Signin, 
        Signup, 
        Signout,
        clearErrorMessage,
        tryLocalSignin,
    },
    { token: null, errorMessage : '' }
);