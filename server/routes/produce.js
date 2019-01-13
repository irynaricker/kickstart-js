const mongoose = require("mongoose");
const Produce = mongoose.model("produce");
const NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyDK6IbyqSKZFxGg6pcUPaprF8HDHRHcRVY', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
const geocoder = NodeGeocoder(options);
module.exports = app => {
    app.get('/produce', (req, res) => {
        Produce.find({}, function(err, produceList) {
            if (err) throw err;
            res.send(produceList);
        });
    });
    app.get('/produce/:type', (req, res) => {
        if (req.params.type) {
            Produce.find({ 'produceType': req.params.type }, (err, produceList) => {
                if (err) throw err;
                res.send(produceList);
            });
        }

    });
    app.post('/produce',  (req, res) => {
        let lat;
        let long;
        geocoder.geocode(req.body.pickUpLocation.address)
        .then(function(georesponse) {
            lat = georesponse[0].latitude;
            long = georesponse[0].longitude;
            return new Produce({
                produceType: req.body.produceType,
                variety: req.body.variety,
                produceAmount: req.body.produceAmount,
                produceName: req.body.produceName,
                availability:{
                    date: req.body.availability.date
                },
                pickUpLocation: {
                    address: req.body.pickUpLocation.address,
                    city: req.body.pickUpLocation.city,
                    state: req.body.pickUpLocation.state,
                    zip: req.body.pickUpLocation.zip,
                    lat: lat,
                    long: long
                },
                organic: req.body.organic,
                seedSource: req.body.seedSource,
                description: req.body.description
              });
        })
        .then( product => {
            product.save((err, produce) => {
                if(err) {
                    console.log('Error')
                }
                res.send("Saved");
            });
        })
        .catch(function(err) {
            console.log(err);
        });
    });
};
