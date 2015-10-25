System.registerModule("../../Routes/accountRoute.js", [], function() {
  "use strict";
  var __moduleName = "../../Routes/accountRoute.js";
  var express = require('express');
  var routes = function(Accounts) {
    var accountRouter = express.Router();
    accountRouter.route('').get(function(req, res) {
      var query = req.query;
      Accounts.find(query, function(err, data) {
        if (err)
          res.status(500).send(err);
        else
          res.json(data);
      });
    });
    return accountRouter;
  };
  module.exports = routes;
  return {};
});
System.get("../../Routes/accountRoute.js" + '');
//# sourceMappingURL=accountRoute.js.map
