import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

export  function call(endpoint, params) {

    const cloudsearch = new AWS.CloudSearchDomain({
        endpoint: endpoint,
        apiVersion: '2013-01-01'
    });

    var params = params ;
   
    return cloudsearch.search(params).promise();

}