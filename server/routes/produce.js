const mongoose = require("mongoose");
const Produce = mongoose.model("produce");
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
        const produce =  new Produce({
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
                zip: req.body.pickUpLocation.zip
            },
            organic: req.body.organic,
            seedSource: req.body.seedSource,
            description: req.body.description
          });
          produce.save((err, produce) => {
              if(err) {
                  console.log('Error')
              }
              res.send("Saved");
          });

    });
};
