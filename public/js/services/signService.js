/**
 * Created by risandoval on 10/12/2015.
 */

app.factory('signService', function ($http) {

    var authentication = {};

    authentication.signIn = function (auth) {
        var err = {};
        $http.post('/account/login', auth)
            .then(function (res) {
                if(res){
                    return res.data;
                }else{
                    err.message = 'Email or Password not right';
                    return err;
                }
            }, function(){
                err.message = 'Server Error';
                return err;
            });
    };

    return authentication;
});