import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        cords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 77.59790079999999 + increment * tenMetersWithDegrees,
            latitude: 12.9368064 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);
