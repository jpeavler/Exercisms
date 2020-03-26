//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
    if(planet == "earth")
    {
        let earthAge = seconds / 315576
        earthAge = Math.round(earthAge);
        earthAge = earthAge / 100;
        return earthAge;
    }else if(planet == "mercury"){
        let mercuryAge = seconds/ 315576;
        mercuryAge = mercuryAge/.2408467
        mercuryAge = Math.round(mercuryAge);
        mercuryAge = mercuryAge / 100;
        return mercuryAge;
    }else if(planet == "venus"){
        let venusAge = seconds/ 315576;
        venusAge = venusAge/ 0.61519726;
        venusAge = Math.round(venusAge);
        venusAge = venusAge / 100;
        return venusAge;
    }else if(planet == "mars"){
        let marsAge = seconds/ 315576;
        marsAge = marsAge/ 1.8808158;
        marsAge = Math.round(marsAge);
        marsAge = marsAge / 100;
        return marsAge;
    }else if(planet == "jupiter"){
        let jupiterAge = seconds/ 315576;
        jupiterAge = jupiterAge/ 11.862615;
        jupiterAge = Math.round(jupiterAge);
        jupiterAge = jupiterAge / 100;
        return jupiterAge;
    }else if(planet == "saturn"){
        let saturnAge = seconds/ 315576;
        saturnAge = saturnAge/29.447498;
        saturnAge = Math.round(saturnAge);
        saturnAge = saturnAge / 100;
        return saturnAge;
    }else if(planet == "uranus"){
        let uranusAge = seconds/ 315576;
        uranusAge = uranusAge/ 84.016846;
        uranusAge = Math.round(uranusAge);
        uranusAge = uranusAge / 100;
        return uranusAge;
    }else if(planet == "neptune"){
        let neptuneAge = seconds/ 315576;
        neptuneAge = neptuneAge/ 164.79132;
        neptuneAge = Math.round(neptuneAge);
        neptuneAge = neptuneAge / 100;
        return neptuneAge;
    };

};
