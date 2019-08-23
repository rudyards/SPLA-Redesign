var Resource = require('../models/resource');

module.exports = {
    getAllResources,
    getSomeResources
}

function getAllResources(req, res){
    Resource.find({}).then(function(resource){
        res.status(200).json(resource);
    })
}

function getSomeResources(req, res){
    Resource.find({ area: req.params.area}).then(function(resource){
        res.status(200).json(resource);
    })
}