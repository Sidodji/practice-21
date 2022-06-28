const express = require('express');
const bodyParser = require('body-parser');

const errors = require('./helpers/errors');

const SrvAgent = require('./services/srvAgents');
const SrvProperty = require('./services/srvProperties');
const SrvOffice = require('./services/srvOffices');

module.exports = (db) =>{
    const app = express();

    //Services
    const srvAgent = new SrvAgent(db.agents, errors);
    const propertiesService = new SrvProperty(db.properties, errors);
    const officesService = new SrvOffice(db.offices, errors);

    //Controllers
    const error = require('./global-controllers/error');

    const apiController = require('./controllers/api')(
        srvAgent,
        officesService,
        propertiesService
    );

    app.use(bodyParser.json());

    app.use('/api', apiController);
    app.use('/api', error);

    return app;
}