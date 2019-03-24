/*global cordova, module*/

module.exports = {
    getState: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Proximity", "getState", []);
    },

    /**
     *  Enable the sensor. Needs to be called before getting the state.
     */
    enableSensor: function() {
        cordova.exec(null, null, "Proximity", "start", []);
    },

    /**
     *  Disable the sensor.
     */
    disableSensor: function() {
        cordova.exec(null, null, "Proximity", "stop", []);
    }
};
