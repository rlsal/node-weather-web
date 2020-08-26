const request = require('request')

const forecast = (longtitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e747dd87a4dc1a710f468e834bb033d8&query=' + longtitude +',' + latitude + '&units=m'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location.", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' +body.current.feelslike + ' degress out.' +
              'The humidity is ' + body.current.humidity + '%. Local time is: ' + body.location.localtime)
        }
    })
}

module.exports = forecast