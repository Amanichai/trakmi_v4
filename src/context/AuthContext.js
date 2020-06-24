import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trakerApi from '../api/traker';
import { navigate } from '../navigationRef';


const authReducer = (state, action)=>{
    switch(action.type){
        case 'error_msg':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return{errorMessage: '', token: action.payload}
        default:
            return state;
    }
}

const signup = (dispatch) => async ({email, password})=>{
        try{
            const response = await trakerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token})
            navigate('mainFlow');
        }catch (err){
            dispatch({type: 'error_msg', payload: 'Invalid email or password'})
        }  
    }


const signin = (dispatch)=>{
    return ({email, password})=>{

    }
}

const signout = (dispatch) =>{
    return ()=>{
     
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {token: null, errorMessage: ''}
)