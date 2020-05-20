function toCelcius(document.getElementById('tempInput'), document.getElementById('tempUnit')) {
    unit = unit.toLowerCase();
    switch(unit) {
        case "fahrenheit":
            temperature = (temperature - 32) * 5 / 9;
            break;
        case "celcius":
            temperature = (temperature * 9 / 5) + 32;
            break;
    }
    
    temperature = Math.round(temperature);
    
    document.getElementById('result').innerHTML = temperature;
}