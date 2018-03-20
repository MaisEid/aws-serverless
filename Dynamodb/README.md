Serverless REST API with DynamoDB 

Dynamo db one of will known non-sql db 
before chosing non-sql we should know more about
non-sql db which require 
understanding of documents consepts , indexing , scanning , the restriction of non-sql as its is not the best solutioon for all project


From my experinces I found that  :
1- Easy to setup the table but in migration for data its difficult if you use a basic node-sdk operation 
2- Easy to connect and calling CRUD opertaion
3- Not effiecnt in scan operation when we have huge data
4- hight cost, as its scalible every time we increase the size of data we need to increas the capacity so the cost will be increase 
5- From cost prespective better to use batch write and get operation 


Use-case
call REST api which use daynmo db as data store 

Setup: 
1- Create AWS account 
2- install serverless 
npm i -g serverless

3- Configure the aws access key and secret key 

serverless config credentials 
--provider aws --key ******** --secret *********** 
--profile daynmo-serverless


Create serverless project:

1- Create templeate 
$ sls create --template aws-nodejs --name <name>
 by entering this command you will have the template of serverless project 
 which contain the 
 serveless.yaml -->  you can define the infrastructure resources you need in projct 
 handler.js -->  File contain example of lambda function which called in one of the http request

2- Install AWS Related Dependencies
$ npm init -y
$ npm install aws-sdk --save-dev
$ npm install uuid --save



