import createDataContext from './createDataContext';
import trakerApi from '../api/traker';


const authReducer = (state, action)=>{
    switch(action.type){
        case 'error_msg':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const signup = (dispatch) =>{
    return async ({email, password})=>{
        try{
            const response = await trakerApi.post('/signup', {email, password});
            console.log(response.data)
        }catch (err){
            dispatch({type: 'error_msg', payload: 'Invalid email or password'})
        }  
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
    {isSignedIn: false, errorMessage: ''}
)