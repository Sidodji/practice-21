const Joi = require('joi');

exports.valProperty =(data) =>{
    const schema = Joi.object(
        {
            id: Joi.number(),
            
            name: Joi.string().required(),

            email: Joi.string().email().required(),
        
            tel: Joi.string().required(),
                    
            officeId: Joi.number().required()                                  
        }
    ); 

    return schema.validateAsync(data);
}