export default class UserService {
    static EnterUser(body) {
        console.log(body)
        return fetch('/users/auth', {
            //mode: "no-cors",
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'Basic ' + btoa(`${body.Username}:${body.Password}`)
            },
            body: JSON.stringify(body)
        }).catch(error => console.log(error)).then(response => response.json()).then(response => {
            return response
        })
    }
    static postUser(body){
        return fetch('/users', {
            //mode: "no-cors",
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }
    static GetCurrentUser(email) {
        return fetch('/users/current/'+email, {
            //mode: "no-cors",
            'method': 'GET',


        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            return response
        })

    }
}