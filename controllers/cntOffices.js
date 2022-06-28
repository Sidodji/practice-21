const CrudController = require('./cntCrud');

class OfficesController extends CrudController {
    constructor(officesService) {
        super(officesService);

        this.readAgents = this.readAgents.bind(this);

        this.routes['/:id/agents'] = [{ method: 'get', cb: this.readAgents }];

        this.registerRoutes();
    }

    async readAgents(req, res){
        res.json(
            await this.service.readAgents(req.params, req.query)
        );
    }
}

module.exports = (officesService) => {
    const controller = new OfficesController(
        officesService
    );

    return controller.router;
};