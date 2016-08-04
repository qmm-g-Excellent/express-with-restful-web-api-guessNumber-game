exports.setRoutes = app => {
  app.use('/items', require('./routers/item-api'));
};
