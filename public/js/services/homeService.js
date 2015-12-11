/**
 * Created by risandoval on 11/12/2015.
 */

app.factory('homeService', function ($http, $q) {

    return {
        bw: bw
    };

    function bw(session, from, to, criteria) {

        var defered = $q.defer();
        var promise = defered.promise;
        var err = {};

        $http.get('/api/analysis/bw?uname=' + session.data.user +
            '&start=' + new Date(from) + '&ends=' + new Date(to) +
            '&criteria' + criteria, {
            headers: {
                Bearer: session.data.token,
                uname: session.data.user
            }
        }).then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    }


});