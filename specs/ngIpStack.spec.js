(() => {
  describe('ngIpStack', () => {
    beforeEach(() => {
      module('ipStack')
    })

    let requester, $httpBackend
    beforeEach(inject((_requester_, _$httpBackend_) => {
      requester = _requester_
      requester.setApiKey('123')
      $httpBackend = _$httpBackend_
    }))

    it('Factory request is defined?', () => {
      expect(requester).toBeDefined()
    })
    it('$httpBackend is defined?', () => {
      expect($httpBackend).toBeDefined()
    })

    it('should have 123 on getApiKey', () => {
      expect(requester.getApiKey()).toEqual('123')
    })

    it('should have setApiKey', () => {
      requester.setApiKey('456')
      expect(requester.getApiKey()).toEqual('456')
    })

    it('should have status 200 on getIp', () => {
      $httpBackend.whenGET('http://api.ipstack.com/check?access_key=123').respond((method, url, data) => {
        return [200, {
                        "ip": "172.19.1.45",
                        "type": "ipv4",
                        "continent_code": "SA",
                        "continent_name": "South America",
                        "country_code": "BR",
                        "country_name": "Brazil",
                        "region_code": "CE",
                        "region_name": "Ceara",
                        "city": "Fortaleza",
                        "zip": null,
                        "latitude": -4.99994345399999998,
                        "longitude": -40.7829,
                        "location": {
                            "geoname_id": 9568947,
                            "capital": "Brasília",
                            "languages": [
                                {
                                    "code": "pt",
                                    "name": "Portuguese",
                                    "native": "Português"
                                }
                            ],
                            "country_flag": "http://assets.ipstack.com/flags/br.svg",
                            "country_flag_emoji": "🇧🇷",
                            "country_flag_emoji_unicode": "U+1F1E7 U+1F1F7",
                            "calling_code": "55",
                            "is_eu": false
                        }
                    }, {}]
      });
      requester.getIp().then((res) => {
        expect(res.status).toEqual(200)
      })
      $httpBackend.flush()
    })

    it('should have ip on getIp', () => {
      $httpBackend.whenGET('http://api.ipstack.com/check?access_key=123').respond((method, url, data) => {
        return [200, {ip: '172.19.1.45'}, {}]
      });
      requester.getIp().then((res) => {
        expect(res.data.ip).toEqual('172.19.1.45')
      })
      $httpBackend.flush()
    })

    it('should have false value in success key on getIp Error', () => {
      $httpBackend.whenGET('http://api.ipstack.com/check?access_key=123').respond((method, url, data) => {
        return [200, {success: false, error: { code: 101, type: 'invalid_access_key', info: 'You have not supplied a valid API Access Key. [Technical Support: support@apilayer.com]'}}, {}]
      });
      requester.getIp().then((res) => {
        expect(res.status).toEqual(200)
        expect(res.success).toBeFalsy()
      })
      $httpBackend.flush()
    })

    it('should have code equals 101 on getIp Error', () => {
      $httpBackend.whenGET('http://api.ipstack.com/check?access_key=123').respond((method, url, data) => {
        return [200, {success: false, error: { code: 101, type: 'invalid_access_key', info: 'You have not supplied a valid API Access Key. [Technical Support: support@apilayer.com]'}}, {}]
      });
      requester.getIp().then((res) => {
        expect(res.status).toEqual(200)
        expect(res.data.error.code).toEqual(101)
      })
      $httpBackend.flush()
    })

  })
})()
