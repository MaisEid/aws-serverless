# Serverless REST API with DynamoDB 
DynamoDB is NoSQL database service provided by Amazon ,before this kind of DB should know more about it as 
understanding of documents concept , indexing , scanning.

After implemenatig this small project I found that DynmoDB

1. Easy to setup but you need to know which option amazon recommend for data migration, as I wrote a node program to import my data from a large CSV and it was not the best solution for that.
2. Super easy to integrate with AWS Lambdas and API Gateway.
3. Scan operations are less efficient than other operations in DynamoDB 
4. High cost, as its scalable everytime we increase the size of data we need to increase the capacity so the cost will be increase
5. From cost prespective better to use batch write and get operation 


# Setup: 
1. install serverless 
```
npm i -g serverless
```
2. Configure the aws access key and secret key 

* key: AWS access key 
* secret : AWS secret Key
* profile : setup profile name for the provided key 

```
serverless config credentials --provider aws --key ******** --secret *********** --profile daynmo-serverless
```

# Steps 
1. Create templeate 
 by running this command you will have the template of serverless project 
 which contain the 
 serveless.yaml -->  you can define the infrastructure resources you need in projct 
 handler.js -->  File contain example of lambda function which called in one of the http request
```
$ sls create --template aws-nodejs --name <name>
```

2.Create package.json file and add needed packages
```
$ npm init -y
$ npm install aws-sdk --save-dev
$ npm install uuid --save
```
3. Create "Lib" folder which contain common functionallty shared accross all API 

3.1 create response-lib.js : build a basic shared response object
```
export function success(body) {
    return buildResponse(200, body);
  }
  
  export function failure(body) {
    return buildResponse(500, body);
  }
  
  function buildResponse(statusCode, body) {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(body)
    };
  }
```
3.2 create dynamodb-lib.js : This file has one instance to call aws-sdk dy
