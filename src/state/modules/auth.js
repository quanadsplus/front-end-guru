import AuthenticationService from '../../services/authentication.service.js'
export const state = {
    jwt: localStorage.getItem("jwt")
}

export const mutations = {
    setJwt(state,value){
        state.jwt = value
        localStorage.setItem("jwt",value)
    }
}

export const getters = {
    // Whether the user is currently logged in.
   
}

export const actions = {

    init() {
    },

    async loginEmailPassword({commit},value){
        const result = await AuthenticationService.login(value.email,value.password)
        if (result.data.status == 'errors') {
            return false
        }
        if(result){
            commit('setJwt',result.data.token)
        }
        return true

    },

    
}

