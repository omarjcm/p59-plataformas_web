const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetch = (URL_API) => {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()
        http.open('GET', URL_API, true)
        http.onreadystatechange = function(e) {
            if (http.readyState == 4) {
                (http.status == 200)
                    ? resolve( JSON.parse(http.responseText) ) 
                    : reject( new Error('[error] - ' + URL_API) )
            }
        }
        http.send()
    })
}

module.exports = fetch