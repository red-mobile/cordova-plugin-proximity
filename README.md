# cordova-plugin-proximity

This plugin provides access to the device's (IR) proximity sensor.

At this moment this plugin is implemented only for Android!

## Installation

```
cordova plugin add cordova-plugin-proximity
```

## Methods

- proximity.enableSensor
- proximity.disableSensor
- proximity.getState

### proximity.getState

Gets state from the proximity sensor.

```js
    function onSuccess(results) {
      console.log(results.distance);
      console.log(results.timestamp);
    };

    function onError(error) {
      console.log(error);
    };

    proximity.enableSensor();
    proximity.getState(onSuccess, onError);
```

`results` object properties:

- `distance`: Distance to the object acquired by the proximity sensor. (far is 0, near is 1)
- `timestamp`: The time at which this heading was determined. (milliseconds)

## Supported Platforms

- Android
