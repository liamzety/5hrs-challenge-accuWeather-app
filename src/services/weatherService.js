import { storageService } from "./storageService"

export const weatherService = {
    getForecastFromCity,
    getAutoComplete,
    update,
    getFavForecasts,
    loadForecasts
}
function loadForecasts() {
    return storageService.loadFromStorage('5fore')
}
async function getForecastFromCity(query) {
    // for dev only
    return storageService.loadFromStorage('5fore')

    //     return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09s9LG1iE1JYDKGH9A5AeujArIo8xOyqjR&q=${query}`)
    //     .then(res => {
    //         return res.json()
    //     } )
    //     .then(data => {
    //         storageService.saveToStorage('city',data)
    //         return data
    //     })
    //   .then(data => {
    //     return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=s9LG1iE1JYDKGH9A5AeujArIo8xOyqjR&details=true`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         const forecasts = data;
    //          forecasts.DailyForecasts = forecasts.DailyForecasts.map(forecast => {
    //             forecast.id = _makeid()
    //             return forecast
    //         })
    //         console.log('forecasts:',forecasts)
    //         storageService.saveToStorage('5fore',forecasts)
    //         return data
    //     })
    //   })

}

function update(forecasts) {
    storageService.saveToStorage('5fore', forecasts)
}
function getFavForecasts() {
    const forecasts = storageService.loadFromStorage('5fore')
    forecasts.DailyForecasts = forecasts.DailyForecasts.filter(forecast => forecast.isFav)
    return forecasts
}
function getAutoComplete(query) {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=s9LG1iE1JYDKGH9A5AeujArIo8xOyqjR&q=${query}`)
        .then(res => res.json())
        .then(data => {
            return data
        })
}

function _makeid(length = 7) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}