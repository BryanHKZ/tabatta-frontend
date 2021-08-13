import React, {useReducer} from 'react'
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';

import {MOSTRAR_ALERTA} from '../../types'

const AlertaState = props =>{
    const initialState ={
        alerta:null
    }

    const [state, dispatch] = useReducer(alertaReducer, initialState);

    const mostrarAlerta = (msg) =>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload:msg,
          
        });

    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}

            >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;