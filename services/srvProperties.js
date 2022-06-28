const SrvCrud = require('./srvCrud');
const valProperty = require('../validation/valProperty')

class SrvProperties extends SrvCrud {
    async create(data) {
        let property = {
            heading: data.heading,
            price: data.price,
            currency: data.currency,
            location: data.location,
            agentId: data.agentId
        }

        const {error} = await valProperty(property)

        if(error)
            throw this.errors.incorrectData;

        return super.create(property);
    }

    async update(data) {
        let property = {
            heading: data.heading,
            price: data.price,
            currency: data.currency,
            location: data.location,
            agentId: data.agentId
        }

        const {error} = await valProperty(property)

        if(error)
            throw this.errors.incorrectData;

        return super.update(data.id, property);
    }

    async conAgent(data)
    {
        if(isNaN(data.id) || isNaN(data.agentId))
            throw this.errors.invalidId;

        let property = await this.read(data.id);

        property.agentId = data.agentId;
        return super.update(data.id, property);
    }

    async unconAgent(data)
    {
        if(isNaN(data.id))
            throw this.errors.invalidId;

        let property = await this.read(data.id);

        property.agentId = null;
        return super.update(data.id, property);
    }
}

module.exports = SrvProperties;