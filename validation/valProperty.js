const Joi = require('joi');

exports.valProperty = (data) =>{
    const schema = Joi.object(
        {
            id: Joi.number(),
            
            heading: Joi.string().required(),
                        
            price: Joi.number().greater(0).required(),
                    
            currency: Joi.string().pattern(/^((BYN)|(USD)|(EUR)){1}$/).required(),
                               
            location: Joi.string().required(),
                                    
            agentId: Joi.number().required()                 
        }
    )

    return schema.validateAsync(data);
}
