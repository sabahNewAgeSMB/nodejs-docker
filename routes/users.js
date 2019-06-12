var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session');
/* GET users listing. */
router.get('/',function(req,res,next){
  
  console.log(session)
  var payload = {
    "username_or_email": "Rich.demonte@gmail.com",
    "password": "Sportable2019!"
  }
  s.post({url:'https://api.onepeloton.com/auth/login', payload}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});







  request.post({
    url: 'https://api.onepeloton.com/auth/login',
    form: {"username_or_email":"Rich.demonte@gmail.com", "password":"Sportable2019!"}
}, function(error, response, body){
  console.log(response)
    // request.get({
    //     url:"https://exampleurl.com/logged",
    //     header: response.headers
    // },function(error, response, body){
    //     // The full html of the authenticated page
    //     console.log(body);
    // });
});
})
router.post('/createDirectAccount', function(req, res, next) {
  let accountDetails = {
   federalTaxBracketPercent:74.5,
   annualIncomeUSD_min:50001,
   annualIncomeUSD_max:100000,
   investmentExperience:"LIMITED",
   investmentObjective:"GROWTH",
   riskTolerance:"MEDIUM",
   liquidNetWorthUSD_min:100001,
   liquidNetWorthUSD_max:200000,
   totalNetWorthUSD_min:100001,
   totalNetWorthUSD_min:50001,
   totalNetWorthUSD_max:100000,
   isControlPerson:"YES",
   companySymbols:"GOOG",
   isPoliticallyExposed:"YES",
   immediateFamily:["Jubin"],
   politicalOrganization:"Democratic Party of newageSys",
   isAffiliatedExchangeOrFINRA:"NO",
   firmName:'NewageSys',
   affiliatedApproval:'',
   dateOfBirth:"1994-12-18",
   citizenshipCountry:"USA",
   birthCountry:"USA",
   socialSecurityNumber:"123-45-6789",
   permanentResident:"YES",
   phoneNumber:"9846050801",
   postalCode:"97214",
   city:"Portland",
   streetAddress:"107 SE Washington St, Ste 256",
   state:"OR",
   country:"USA",
   employmentStatus:"EMPLOYED",
   positionEmployed :"Programmer",
   employer :"Apex Clearing Corporation",
   givenName:"Elizabeth",
   familyName:"Windsor",
   prefix:"HRH",
   suffix:"II",
   legalName:"DELL I 6 Windsor",
   isTradeAuthorization:"YES",
   agentName:"dorotti"
  }
  request.post({
    headers: {'content-type' : 'application/json'},
    url:     'http://127.0.0.1:5000/createDirectAccount',
    body:    JSON.stringify(accountDetails)
  }, function(error, response, body){
    
    res.send({data:response})
  });
});

module.exports = router;
