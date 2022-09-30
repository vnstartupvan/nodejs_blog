module.exports = {
    multipleMongooseObj: (model) => {
        return model.map(models => models.toObject());
    },
    mongooseObj: (model) => {
        return model ? model.toObject() : model;
    }
};