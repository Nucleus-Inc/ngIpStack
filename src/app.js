let ipStackModule = angular.module('ipStack',[])
ipStackModule.factory('requester', ['$http', ($http) => {
  let apiKey = null
  return {
    getIp: () => {
      return $http.get('http://api.ipstack.com/check?access_key='+apiKey).then((result) => { return result }).catch((err) => { return err })
    },
    setApiKey: (accessKey) => {
      apiKey = accessKey
    },
    getApi: () => {
      return apiKey
    }
  }
}])
