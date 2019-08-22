var initialState = {
    islogin: false
}

function Loginpath(state = initialState, action) {
    switch (action.type) {
        case "Login":
            //console.log(state)
            return { ...state,
                islogin: action.Data
            }
        case "Logout":
            //console.log(state)
            return {
                ...state,
                islogin:action.params
            }
        default:
            return state;

    }
}


export default Loginpath;