const CrudController = require('./cntCrud');

class AgentsController extends CrudController {
    constructor(agentsService) {
        super(agentsService);

        this.conOffice = this.conOffice.bind(this);
        this.unconOffice = this.unconOffice.bind(this);
        this.readProperties = this.readProperties.bind(this);

        this.routes['/:id/con/:officeId'] = [{ method: 'post', cb: this.conOffice }];
        this.routes['/:id/uncon'] = [{ method: 'post', cb: this.unconOffice }];
        this.routes['/:id/properties'] = [{ method: 'get', cb: this.readProperties }];

        this.registerRoutes();
    }

    async readProperties(req, res){
        res.json(
            await this.service.readProperties(req.params, req.query)
        );
    }
    
    async conOffice(req, res){
        res.json(
            await this.service.conOffice(req.params)
        );
    }

    async unconOffice(req, res){
        res.json(
            await this.service.unconOffice(req.params)
        );
    }

    
}

module.exports = (agentsService) => {
    const controller = new AgentsController(
        agentsService
    );

    return controller.router;
};