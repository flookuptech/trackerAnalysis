fetch("http://ip-api.com/json")
  .then((res) => res.json())
  .then((response) => {
    //  =============== TO CHECK STATUS ===============

    function statusCheck() {
      var statusLog = document.querySelector(".status");
      var status = response.status;
      console.log(status);

      statusLog.innerHTML += status;
    }
    statusCheck("...");

    //  =============== TO CHECK COUNTRY ===============

    function countryCheck() {
      var countryLog = document.querySelector(".country");
      var country = response.country;
      console.log(country);

      countryLog.innerHTML += country;
    }
    countryCheck("...");

    //  =============== TO CHECK COUNTRY CODE ===============

    function countryCodeCheck() {
      var countryCodeLog = document.querySelector(".countryCode");
      var countryCode = response.countryCode;
      console.log(countryCode);

      countryCodeLog.innerHTML += countryCode;
    }
    countryCodeCheck("...");

    //  =============== TO CHECK STATE ===============

    function stateCheck() {
      var stateLog = document.querySelector(".state");
      var state = response.regionName;
      console.log(state);

      stateLog.innerHTML += state;
    }
    stateCheck("...");

    //  =============== TO CHECK STATE CODE ===============

    function stateCodeCheck() {
      var stateCodeLog = document.querySelector(".stateCode");
      var stateCode = response.region;
      console.log(stateCode);

      stateCodeLog.innerHTML += stateCode;
    }
    stateCodeCheck("...");

    //  =============== TO CHECK CITY ===============

    function cityCheck() {
      var cityLog = document.querySelector(".city");
      var city = response.city;
      console.log(city);

      cityLog.innerHTML += city;
    }
    cityCheck("...");

    //  =============== TO CHECK ZIP CODE ===============

    function zipCheck() {
      var zipLog = document.querySelector(".zip");
      var zip = response.zip;
      console.log(zip);

      zipLog.innerHTML += zip;
    }
    zipCheck("...");

    //  =============== TO CHECK LATITUDE ===============

    function latCheck() {
      var latLog = document.querySelector(".latitude");
      var lat = response.lat;
      console.log(lat);

      latLog.innerHTML += lat;
    }
    latCheck("...");

    //  =============== TO CHECK LONGITUDE ===============

    function longCheck() {
      var lonLog = document.querySelector(".longitude");
      var lon = response.lon;
      console.log(lon);

      lonLog.innerHTML += lon;
    }
    longCheck("...");

    //  =============== TO CHECK TIMEZONE ===============

    function timeZoneCheck() {
      var timeZoneLog = document.querySelector(".timezone");
      var timeZone = response.timezone;
      console.log(timeZone);

      timeZoneLog.innerHTML += timeZone;
    }
    timeZoneCheck("...");

    //  =============== TO CHECK ISP ===============

    function ispCheck() {
      var ispLog = document.querySelector(".isp");
      var isp = response.isp;
      console.log(isp);

      ispLog.innerHTML += isp;
    }
    ispCheck("...");

    //  =============== TO CHECK ORGANISATION ===============

    function orgCheck() {
      var orgLog = document.querySelector(".organisation");
      var org = response.org;
      console.log(org);

      orgLog.innerHTML += org;
    }
    orgCheck("...");

    //  =============== TO CHECK QUERY ===============

    function queryCheck() {
      var queryLog = document.querySelector(".query");
      var query = response.query;
      console.log(query);

      queryLog.innerHTML += query;
    }
    queryCheck("...");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

//  =============== TO CHECK DATE ===============

function log() {
  var logElem = document.querySelector(".tracker");

  var time = new Date();
  console.log(time);
  logElem.innerHTML += time;
}
log("...");

//  =============== TO CHECK DEVICE ===============

window.addEventListener("load", function () {
  // PARSE USER AGENT
  var result = bowser.getParser(navigator.userAgent).getResult();

  //  =============== TO CHECK DEVICE BROWSER INFO ===============
  function browLog() {
    var browName = document.querySelector(".browName");

    var browserName = result.browser.name;
    console.log(browserName);
    browName.innerHTML += browserName;
  }
  browLog("...");

  //  =============== TO CHECK DEVICE BROWSER VERSION ===============

  function browVerLog() {
    var browVer = document.querySelector(".browVer");

    var browserVer = result.browser.version;
    console.log(browserVer);
    browVer.innerHTML += browserVer;
  }
  browVerLog("...");

  // =============== TO CHECK OPERATING SYSTEM ===============

  //  =============== TO CHECK OPERATING SYSTEM NAME ===============

  function osNameLog() {
    var osName = document.querySelector(".osName");

    var osysName = result.os.name;
    console.log(osysName);
    osName.innerHTML += osysName;
  }
  osNameLog("...");

  //  =============== TO CHECK OPERATING SYSTEM VERSION ===============

  function osVerLog() {
    var osVer = document.querySelector(".osVer");

    var osysVer = result.os.version;
    console.log(osysVer);
    osVer.innerHTML += osysVer;
  }
  osVerLog("...");

  //  =============== TO CHECK OPERATING SYSTEM VERSION NAME ===============

  function osVerNameLog() {
    var osVerName = document.querySelector(".osVerName");

    var osysVerName = result.os.versionName;
    console.log(osysVerName);
    osVerName.innerHTML += osysVerName;
  }
  osVerNameLog("...");

  //  =============== TO CHECK DEVICE TYPE ===============

  function deviceLog() {
    var deviceType = document.querySelector(".deviceType");

    var devicesType = result.platform.type;
    console.log(devicesType);
    deviceType.innerHTML += devicesType;
  }
  deviceLog("...");
});

//  =============== TO CHECK DEVICE HEIGHT ===============

function deviceHLog() {
  var deviceHType = document.querySelector(".deviceHeight");

  var devicesHType = window.screen.availHeight + "px";
  console.log(devicesHType);
  deviceHType.innerHTML += devicesHType;
}
deviceHLog("...");

//  =============== TO CHECK DEVICE WIDTH ===============

console.log("Screen Widht: " + window.screen.availWidth + "px");
function deviceWLog() {
  var deviceWType = document.querySelector(".deviceWidth");

  var devicesWType = window.screen.availWidth + "px";
  console.log(devicesWType);
  deviceWType.innerHTML += devicesWType;
}
deviceWLog("...");
