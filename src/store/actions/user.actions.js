export const ADD_USER='ADD_USER'

export const addUserAction=(person)=>{

    return {
        type: ADD_USER,
        payload: person
    }
}