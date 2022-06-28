const CrudService = require('./srvCrud');
const valAgent = require('../validation/valAgent')

class SrvAgent extends CrudService {
    async create(data) {
        let agent = {
            name: data.name,
            email: data.email,
            tel: data.tel,
            officeId: data.officeId
        }

        const {error} = await valAgent(agent)
        
        if(error)
            throw this.errors.incorrectData;

        return super.create(agent);
    }

    async update(data) {
        let agent = {
            name: data.name,
            email: data.email,
            tel: data.tel,
            officeId: data.officeId
        }

        const {error} = await valAgent(agent)
        
        if(error)
            throw this.errors.incorrectData;

        return super.update(data.id, agent);
    }

    async conOffice(data){
        if(isNaN(data.id) || isNaN(data.officeId))
            throw this.errors.invalidId;

        let agentId = await this.read(data.id);

        agentId.officeId = data.officeId;
        return super.update(data.id, agent);
    }

    async unconOffice(data){
        if(isNaN(data.id))
            throw this.errors.invalidId;

        let agent = await this.read(data.id);

        agent.officeId = null;
        return super.update(data.id, agent);
    }

    async readProperties(data, options)
    {
        let queryOptions = {
            association: 'properties',
            limit: 20,
            offset: 0
        };

        if(isNaN(data.id))
            throw this.errors.invalidId;
   
        return this.repository.findByPk(data.id, {include: queryOptions});
    }
}

module.exports = SrvAgent;