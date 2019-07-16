var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Item = require('../users/item.model');
var Group = require('../users/group.model');

// CREATES A NEW ITEM
router.post('/item/add', function (req, res) {
  Item.create({
          userId : req.body.userId,
          itemNumber : req.body.itemNumber,
          itemName : req.body.itemName,
          availableStock : req.body.availableStock,
          minStockLimit : req.body.minStockLimit,
          measuringUnit : req.body.measuringUnit,
          purchasingCost : req.body.purchasingCost,
          salePrice : req.body.salePrice
        },
      function (err, items) {
          if (err) return res.status(500).send(err);
          res.status(200).send(items);
      });
});

// CREATES A NEW GROUP
router.post('/group/add', function (req, res) {
  Group.create({
          userId : req.body.userId,
          groupNumber : req.body.groupNumber,
          groupName : req.body.groupName,
          availableStock : req.body.availableStock,
          minStockLimit : req.body.minStockLimit,
          measuringUnit : req.body.measuringUnit,
          purchasingCost : req.body.purchasingCost,
          salePrice : req.body.salePrice
        },
      function (err, groups) {
          if (err) return res.status(500).send("There was a problem adding the information to the database.");
          res.status(200).send(groups);
      });
});

// RETURNS ALL THE ITEMS IN THE DATABASE
router.get('/item/all', function (req, res) {
  Item.find({}, function (err, items) {
        if (err) return res.status(500).send("There was a problem finding the items.");
        res.status(200).send(items);
    });
});

// GETS A SINGLE ITEM FROM THE DATABASE
router.get('/item/byitemid/:id', function (req, res) {
  Item.findById(req.params.id, function (err, items) {
      if (err) return res.status(500).send("There was a problem finding the item.");
      if (!items) return res.status(404).send("No item found.");
      res.status(200).send(items);
  });
});

// GETS A SINGLE ITEM FROM THE DATABASE
router.get('/item/byuserid/:userId', function(req, res) {
  Item.find({}, function(err,items){
    if(err){
      console.log(err);
    }else{
      console.log(req.params.userId);
      js = req.params.userId !== undefined ? items.filter(function(obj) {return obj.userId== req.params.userId}): items;
      res.send(js);
    }
  })
});

// GETS A SINGLE ITEM FROM THE DATABASE
router.get('/item/byitemnumber/:itemNumber', function(req, res) {
  Item.find({}, function(err,items){
    if(err){
      console.log(err);
    }else{
      console.log(req.params.itemNumber);
      js = req.params.itemNumber !== undefined ? items.filter(function(obj) {return obj.itemNumber== req.params.itemNumber}): items;
      res.send(js);
    }
  })
});

// RETURNS ALL THE GROUPS FROM THE DATABASE
router.get('/group/all', function (req, res) {
  Group.find({}, function (err, groups) {
        if (err) return res.status(500).send("There was a problem finding the groups.");
        res.status(200).send(groups);
    });
});

// RETURNS SINGLE GROUPS FROM THE DATABASE
router.get('/group/bygroupid/:id', function (req, res) {
  Group.findById(req.params.id, function (err, groups) {
      if (err) return res.status(500).send("There was a problem finding the group.");
      if (!groups) return res.status(404).send("No group found.");
      res.status(200).send(groups);
  });
});

// RETURNS SINGLE GROUPS FROM THE DATABASE
router.get('/group/byuserid/:userId', function(req, res) {
  Group.find({}, function(err, groups){
    if(err){
      console.log(err);
    }else{
      console.log(req.params.userId);
      js = req.params.userId !== undefined ? groups.filter(function(obj) {return obj.userId== req.params.userId}): groups;
      res.send(js);
    }
  })
});

// RETURNS SINGLE GROUPS FROM THE DATABASE
router.get('/group/bygroupnumber/:groupNumber', function(req, res) {
  Group.find({}, function(err,groups){
    if(err){
      console.log(err);
    }else{
      console.log(req.params.groupNumber);
      js = req.params.groupNumber !== undefined ? groups.filter(function(obj) {return obj.groupNumber== req.params.groupNumber}): groups;
      res.send(js);
    }
  })
});

// UPDATES A SINGLE ITEM IN THE DATABASE
router.put('/item/byitemid/:id', function (req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, items) {
      if (err) return res.status(500).send("There was a problem updating the item.");
      res.status(200).send(items);
  });
});

// UPDATES A SINGLE ITEM IN THE DATABASE
router.put('/item/byitemnumber/:itemNumber', function (req, res) {
  Item.findOneAndUpdate(req.params.itemNumber, req.body, {new: true}, function (err, items) {
      if (err) return res.status(500).send(err);
      res.status(200).send(items);
  });
});

// UPDATES A SINGLE GROUP IN THE DATABASE
router.put('/group/bygroupid/:id', function (req, res) {
  Group.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, groups) {
      if (err) return res.status(500).send("There was a problem updating the group.");
      res.status(200).send(groups);
  });
});

// UPDATES A SINGLE GROUP IN THE DATABASE
router.put('/group/bygroupnumber/:groupNumber', function (req, res) {
  Group.findOneAndUpdate(req.params.groupNumber, req.body, {new: true}, function (err, groups) {
      if (err) return res.status(500).send(err);
      res.status(200).send(groups);
  });
});

// DELETES A ITEM FROM THE DATABASE
router.delete('/item/byitemid/:id', function (req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, items) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("Item: "+ items.itemName +" was deleted.");
  });
});

// DELETES A ITEM FROM THE DATABASE
router.delete('/item/byitemnumber/:itemNumber', function (req, res) {
  Item.findOneAndDelete(req.params.itemNumber, function (err, items) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).send("Item: "+ items.itemName +" was deleted.");
  });
});

// DELETES A GROUP FROM THE DATABASE
router.delete('/group/bygroupid/:id', function (req, res) {
  Group.findByIdAndRemove(req.params.id, function (err, groups) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).send("Group: "+ groups.groupName +" was deleted.");
  });
});

// DELETES A GROUP FROM THE DATABASE
router.delete('/group/bygroupnumber/:groupNumber', function (req, res) {
  Group.findOneAndDelete(req.params.groupNumber, function (err, groups) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).send("Group: "+ groups.groupName +" was deleted.");
  });
});

module.exports = router;
