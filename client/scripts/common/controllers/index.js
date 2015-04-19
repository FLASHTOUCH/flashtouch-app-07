'use strict';

module.exports = function(app) {
    // inject:start
    require('./activity')(app);
    require('./categories')(app);
    require('./gallery')(app);
    require('./login')(app);
    require('./profile')(app);
    // inject:end
};