const Joi = require('joi');

exports.valProperty =(data)=>{
    const schema = Joi.object(
        {
            id: Joi.number(),

            title: Joi.string().required(),
                            
            website: Joi.string().required(),
                    
            address: Joi.string().required()           
        }
    );

    return schema.validateAsync(data);
}
    