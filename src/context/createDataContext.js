import React, {useReducer} from 'react';

export default (reducer, actions, initValue)=>{
    const Context = React.createContext();

    const Provider = ({ children })=>{
        const [state, dispatch] = useReducer(actions, initValue);

        const boundActions = {};
        for(key in actions){
            boundActions[key] = actions[key](dispatch);
        }
        return (
            <Context.Provider
                value={{state, ...boundActions}}
            >
                { children }
            </Context.Provider>
        )
    }

    return {Context, Provider};
}