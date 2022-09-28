
import { ADD_USER } from "../actions/user.actions";


const initioalState = {
    userList: [],
    isLoader: false,
}

export const userReducer=(state=initioalState, action)=>{
    switch(action.type){
        case ADD_USER:
            const payload = action.payload;
            return { ...state, userList: [...state.userList, payload] }
        default: 
        return state
    }
}