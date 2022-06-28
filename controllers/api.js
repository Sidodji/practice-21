const express = require('express');

module.exports = (
    agentsService,
    officesService,
    propertiesService
) =>{
    const router = express.Router();

    const agentsController = require('./cntAgents')(agentsService);
    const propertiesController = require('./cntProperties')(propertiesService);
    const officesController = require('./cntOffices')(officesService);

    //middleware
    router.use('/agents', agentsController);
    router.use('/properties', propertiesController);
    router.use('/offices', officesController);

    return router;
}