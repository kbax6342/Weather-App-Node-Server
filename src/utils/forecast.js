const request = require('request')


const forecast = (longitude, latitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=5fe95a05677af86821ad8b665e6e7735&query=" + longitude + "," + latitude + "&units=f"
    request({
        url: url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback("This api won't connect to endpoint", undefined)
        } else if (body.error) {
            callback("Unable to connect to weather service", undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions + "! in " +
                ". It is currently " +
                body.current.temperature +
                " degreess out. There is a " +
                body.current.precip +
                "% chance of rain."
            )
        }

    })
}

module.exports = forecast