const backendApi = "http://localhost:3700/api"

const GoshenApi = {
    signUp : {
        url : `${backendApi}/signup`,
        method: "post"
    },
    login : {
        url : `${backendApi}/login`,
        method : 'post'
    },
    currentuser : {
        url : `${backendApi}/userdetails`,
        method: 'get'
    },
    newAudio : {
        url : `${backendApi}/newAudio`,
        method : 'post'
    },
    allAudio : {
        url : `${backendApi}/allAudio`,
        method: 'get'
    },
    subscriber : {
        url : `${backendApi}/subscribe`,
        method : 'post'
    },
    deleteAudio : {
        url : `${backendApi}/delete`,
        method : 'delete'
    },
    logOut : {
        url : `${backendApi}/logout`,
        method : 'get'
    }
    
}

export default GoshenApi