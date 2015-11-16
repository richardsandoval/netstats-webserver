/**
 * Created by rsandoval on 09/11/15.
 */

var DataAnalyzer = module.exports = function (bundleData, criteria) {
    this.bundleData = bundleData;
    this.criteria = criteria;
};

DataAnalyzer.prototype.analysisByDate = function () {
    var self = this;
    var result = {};
    result.bw = [];
    self.bundleData.sort(function (d1, d2) {

        return (new Date(d1.timestamp.date) - new Date(d2.timestamp.date))

    }).forEach(function (data) {

        var actual;
        var last;

        if (result.bw.length > 0) {
            switch (self.criteria) {
                case 'minute':
                    last = result.bw[result.bw.length - 1].time.getMinutes();
                    actual = data.timestamp.date.getMinutes();
                    break;
                case 'hour':
                    last = result.bw[result.bw.length - 1].time.getHours();
                    actual = data.timestamp.date.getHours();
                    break;
                case 'days':
                    last = result.bw[result.bw.length - 1].time.getDay();
                    actual = data.timestamp.date.getDay();
                    break;
                default:
                    last = result.bw[result.bw.length - 1].time.getSeconds();
                    actual = data.timestamp.date.getSeconds();
            }
        }

        if (result.bw.length > 0 && actual === last) {
            result.bw[result.bw.length - 1].dataUse += data.length === 0 ? 64 : data.length;
        } else {
            result.bw.push({
                time: new Date(data.timestamp.date),
                dataUse: data.length === 0 ? 64 : data.length
            });
        }

    });
    var average = 0;
    result.bw.forEach(function (element) {
        average += element.dataUse;
    });

    result.average = average / result.bw.length;
    result.criteria = self.criteria;

    return result;
};

DataAnalyzer.prototype.analysisByCriteria = function () {
    var self = this;
    var result = [];
    var n = 0;
    self.bundleData.forEach(function (data) {

        if (data[self.criteria]) {
            //if (result.length && data[self.criteria] === result[result.length - 1].criteria) {
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
            //}
        }
    });

    return result.sort(function (a, b) {
        return b.count - a.count;
    });


};

var sort_by = function (field, reverse, primer) {

    var key = primer ?
        function (x) {
            return primer(x[field])
        } :
        function (x) {
            return x[field]
        };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    };
};