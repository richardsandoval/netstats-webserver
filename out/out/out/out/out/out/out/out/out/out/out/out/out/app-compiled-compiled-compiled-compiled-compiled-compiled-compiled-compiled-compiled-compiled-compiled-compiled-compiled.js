System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
  "use strict";
  var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js";
  System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
    "use strict";
    var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js";
    System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
      "use strict";
      var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js";
      System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
        "use strict";
        var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js";
        System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
          "use strict";
          var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js";
          System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
            "use strict";
            var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js";
            System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
              "use strict";
              var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js";
              System.registerModule("../app-compiled-compiled-compiled-compiled-compiled-compiled.js", [], function() {
                "use strict";
                var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled-compiled.js";
                System.registerModule("../app-compiled-compiled-compiled-compiled-compiled.js", [], function() {
                  "use strict";
                  var __moduleName = "../app-compiled-compiled-compiled-compiled-compiled.js";
                  System.registerModule("../app-compiled-compiled-compiled-compiled.js", [], function() {
                    "use strict";
                    var __moduleName = "../app-compiled-compiled-compiled-compiled.js";
                    System.registerModule("../app-compiled-compiled-compiled.js", [], function() {
                      "use strict";
                      var __moduleName = "../app-compiled-compiled-compiled.js";
                      System.registerModule("../app-compiled-compiled.js", [], function() {
                        "use strict";
                        var __moduleName = "../app-compiled-compiled.js";
                        System.registerModule("../app-compiled.js", [], function() {
                          "use strict";
                          var __moduleName = "../app-compiled.js";
                          var express = require('express');
                          var app = express();
                          var morgan = require('morgan');
                          var mongoose = require('mongoose');
                          var port = process.env.PORT || 3000;
                          var config = require('./config');
                          var db = mongoose.connect(config.database);
                          app.set('superSecret', config.secret);
                          var Sniffer = require('./models/snifferModel');
                          var Data = require('./models/dataModel');
                          var Account = require('./models/loginModel');
                          var snifferRoute = require('./Routes/snifferRoute')(Sniffer);
                          var dataRoute = require('./Routes/dataRoute')(Data);
                          var accountRoute = require('./Routes/accountRoute')(Account);
                          app.use('/api/sniffer', snifferRoute);
                          app.use('/api/data', dataRoute);
                          app.use('/api/accounts', accountRoute);
                          app.get('/', function(req, res) {
                            res.send('welcome to NetStats Api');
                          });
                          app.listen(port, function() {
                            console.log('Gulp is running my app on PORT: ' + port);
                          });
                          return {};
                        });
                        System.get("../app-compiled.js" + '');
                        return {};
                      });
                      System.get("../app-compiled-compiled.js" + '');
                      return {};
                    });
                    System.get("../app-compiled-compiled-compiled.js" + '');
                    return {};
                  });
                  System.get("../app-compiled-compiled-compiled-compiled.js" + '');
                  return {};
                });
                System.get("../app-compiled-compiled-compiled-compiled-compiled.js" + '');
                return {};
              });
              System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
              return {};
            });
            System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
            return {};
          });
          System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
          return {};
        });
        System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
        return {};
      });
      System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
      return {};
    });
    System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
    return {};
  });
  System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
  return {};
});
System.get("../app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js" + '');
//# sourceMappingURL=app-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled-compiled.js.map
