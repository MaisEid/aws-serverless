export function success(body) {
    return buildResponse(200, body);
  }
  
  export function failure(body) {
    return buildResponse(500, body);
  }
  
  // by defult the result comming from cloudsearch sdk return as dictionarry not json object 
//so this lib file convert the result from dictionary to json object 
 function ToJson(data) {
  var listOfObject = []; var i = 0;
  while (i < data.hits.hit.length) {
      var obj = JSON.parse(JSON.stringify(data.hits.hit[i].fields).replace(/[\[\]']+/g, ''));
      listOfObject.push(obj);
      i++;
  }
  return listOfObject ;
}


  function buildResponse(statusCode, body) {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(ToJson(body))
    };
  }