import {makeAutoObservable} from "mobx";

class TrainState {

    constructor() {
        this.trains = []
        this.token = null
        this.currentUser = {}
        this.isAdmin = false
        makeAutoObservable(this)
    }

    setTrains(trains) {
        this.trains = trains;
    }
    setToken(token){
        this.token = token
    }
    setCurrentUser(user){
        this.currentUser = user
        console.log(this.currentUser)
    }
    setIsAdmin(bool){
        this.isAdmin = bool
    }
}

export default new TrainState();