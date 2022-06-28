const CrudController = require('./cntCrud');

class PropertiesController extends CrudController {
    constructor(propertiesService) {
        super(propertiesService);

        this.linkAgent = this.linkAgent.bind(this);
        this.unlinkAgent = this.unlinkAgent.bind(this);

        this.routes['/:id/link/:agentId'] = [{method:'post', cb: this.linkAgent}];
        this.routes['/:id/unlink'] = [{method:'post', cb: this.unlinkAgent}];

        this.registerRoutes();
    }

    async linkAgent(req, res){
        res.json(
            await this.service.linkAgent(req.params)
        );
    }

    async unlinkAgent(req, res){
        res.json(
            await this.service.unlinkAgent(req.params)
        );
    }
}

module.exports = (propertiesService) => {
    const controller = new PropertiesController(
        propertiesService
    );

    return controller.router;
};