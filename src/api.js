const myExpressURL = 'https://localhost/3023';
// export const myExpressURL = 'http://localhost:3012';


const serverRoutes = {
    Save: myExpressURL + '/api/save',
}


export const Save = (name) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "name": name,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.Save, requestOptions)
}