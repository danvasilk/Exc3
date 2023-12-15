const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Ivanovo&appid=8a4a986c0d49fcdecf3db27cd1fc3244&lang=ru&units=metric"

function sendRequest(method, url) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                const a = JSON.parse(xhr.response);
                const b = "Температура в городе: " + a.name
                resolve(write(b))
                resolve(write(a.main.temp))
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send();
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

function write(text) {
    var p = log.appendChild(document.createElement('p'));
    p.innerHTML = text;
}
