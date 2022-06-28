const CrudService = require('./srvCrud');
const valOffice = require('../validation/valOffice')


class SrvOffices extends CrudService {
    async create(data) {
        let office = {
            title: data.title,
            website: data.website,
            address: data.address
        }
        
        const {error} = await valOffice(office)
        
        if(error)
            throw this.errors.incorrectData;
        
        return super.create(office);
    }

    async update(data) {
        let office = {
            title: data.title,
            website: data.website,
            address: data.address
        }

        const {error} = await valOffice(office)
        
        if(error)
            throw this.errors.incorrectData;

        return super.update(data.id, office);
    }

    async readAgents(data)
    {
        let queryOptions = {
            association: 'agents',
            limit: 20,
            offset: 0
        };

        if(isNaN(data.id))
            throw this.errors.invalidId;

        return this.repository.findByPk(data.id, {include: queryOptions});
    }
}

module.exports = SrvOffices;