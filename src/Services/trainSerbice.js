export default class TrainService {
    static GetTrains() {
        return fetch('/trains', {
            //mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
           // console.log(response)
            return response
        })
    }
    static GetTrainsByFromTown(fromTown) {
        return fetch('/trains/from/'+ fromTown, {
            //mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            // console.log(response)
            return response
        })
    }
    static GetTrainsByToTown(toTown) {
        return fetch('/trains/to/'+ toTown, {
            //mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            // console.log(response)
            return response
        })
    }
    static GetTrainsByData(data) {
        return fetch('/trains/data/'+ data, {
            //mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            // console.log(response)
            return response
        })
    }
    static GetTrainsByFromTownandToTown(fromTown, toTown) {
        return fetch('/trains/from/'+ fromTown + '/to/' + toTown, {
            //mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            // console.log(response)
            return response
        })
    }
    static GetTrainsByFromTownandToTownAndData(fromTown, toTown, d) {
        return fetch('/trains/from/'+ fromTown + '/to/' + toTown + '/data/' + d, {
            //mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            // console.log(response)
            return response
        })
    }
    static postTrain(body){
        return fetch('/trains', {
            //mode: "no-cors",
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }
    static putTrain(body, id){
        return fetch('/trains/' + id, {
            //mode: "no-cors",
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }
    static deleteTrain(id){
        return fetch('/trains/' + id, {
            //mode: "no-cors",
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}