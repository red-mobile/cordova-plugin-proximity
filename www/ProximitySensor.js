var ProximitySensor = function(distance, timestamp) {
    this.distance = distance;
    this.timestamp = timestamp || (new Date()).getTime();
};

module.exports = ProximitySensor;