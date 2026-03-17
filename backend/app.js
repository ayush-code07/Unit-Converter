const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hello")
})

function conversionFuncForLength(a, b, c){
    let temp = a;
    if(b == 'millimeter') temp *= 1
    if(b == 'centimeter') temp *= 10
    if(b == 'meter') temp *= 1000
    if(b == 'kilometer') temp *= 1000000
    if(b == 'inch') temp *= 25.4
    if(b == 'foot') temp *= 304.8
    if(b == 'yard') temp *= 914.4
    if(b == 'mile') temp *= 1609344

    if(c == 'millimeter') temp /= 1
    if(c == 'centimeter') temp /= 10
    if(c == 'meter') temp /= 1000
    if(c == 'kilometer') temp /= 1000000
    if(c == 'inch') temp /= 25.4
    if(c == 'foot') temp /= 304.8
    if(c == 'yard') temp /= 914.4
    if(c == 'mile') temp /= 1609344

    return temp
}

function conversionFuncForWeight(a, b, c){
    let temp = a;
    if(b == 'milligram') temp *= 1
    if(b == 'gram') temp *= 1000
    if(b == 'kilogram') temp *= 1000000
    if(b == 'ounce') temp *= 28349.5231
    if(b == 'pound') temp *= 453592.37

    if(c == 'milligram') temp /= 1
    if(c == 'gram') temp /= 1000
    if(c == 'kilogram') temp /= 1000000
    if(c == 'ounce') temp /= 28349.5231
    if(c == 'pound') temp /= 453592.37

    return temp
}

function conversionFuncForTemperature(a, b, c){
    let temp = a;
    if(b == 'Celsius') temp *= 1
    if(b == 'Fahrenheit') temp = ((temp - 32) * 5)/9
    if(b == 'Kelvin') temp -= 273.15
    
    if(c == 'Celsius') temp /= 1
    if(c == 'Fahrenheit') temp = (temp * 1.8) + 32
    if(c == 'Kelvin') temp += 273.15

    return temp
}
app.post('/length', (req, res) => {
    const {val, convertFrom, convertTo} = req.body
    const result = conversionFuncForLength(val, convertFrom, convertTo)

    res.json({
        val: val,
        convertFrom: convertFrom,
        convertTo: convertTo,
        result: result
    })
})

app.post('/weight', (req, res) => {
    const {val, convertFrom, convertTo} = req.body
    const result = conversionFuncForWeight(val, convertFrom, convertTo)
    
    res.json({
        val: val,
        convertFrom: convertFrom,
        convertTo: convertTo,
        result: result
    })
})

app.post('/temperature', (req, res) => {
    const {val, convertFrom, convertTo} = req.body
    const result = conversionFuncForTemperature(val, convertFrom, convertTo)
    
    res.json({
        val: val,
        convertFrom: convertFrom,
        convertTo: convertTo,
        result: result
    })
})

app.listen(3000)