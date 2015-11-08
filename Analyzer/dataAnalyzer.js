/**
 * Created by rsandoval on 06/11/15.
 */

var DataAnalyzer = module.exports = function (bundleData, criteria) {
    this.bundleData = bundleData;
    this.criteria = criteria;
};


DataAnalyzer.prototype.analysisByCriteria = function () {
    var self = this;
    var result = [];
    var n = 0;
    self.bundleData.forEach(function (data) {
        if (data[self.criteria]) {
            result.forEach(function (unit) {
                if (unit.criteria === data[self.criteria]) {
                    unit.count += 1;
                    n++;
                }
            });
            if (n < 1 || result.length < 1) {
                result.push({
                    criteria: data[self.criteria],
                    count: 1
                });
            }
            n = 0;
        }
    });
    return result.sort(function(a,b){
        return b.count - a.count;
    });

};


DataAnalyzer.prototype.analysis = function () {

    var self = this;
    var count = [];
    var n = 0;
    self.bundleData.forEach(function (data) {
        if (data.sIP) {
            count.forEach(function (unit) {
                if (unit.ipAdd === data.sIP) {
                    unit.count += 1;
                    n++;
                }
            });

            if (n < 1 || count.length < 1) {
                count.push({
                    ipAdd: data.sIP,
                    count: 1
                });
            }
            n = 0;
        }
    });

    return count;
};
