const mongoose = require("mongoose");
const PickUp = mongoose.model("pickup");


module.exports = app => {
    app.post('/pickup',  (req, res) => {
        const pickupScheduled =  new PickUp({
            pickUpUser: req.body.pickUpUser,
            produceId : req.body.produceId,
            growerId: req.body.growerId,
            pickUpDate: req.body.pickUpDate,
            pickUpAmount: req.body.pickUpAmount
          });
          pickupScheduled.save((err, pickup) => {
              if(err) {
                  console.log('Error')
              }
              res.send("Scheduled Pickup");
          });

    });
};
