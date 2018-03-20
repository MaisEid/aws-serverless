import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";


/*
A query operation searches only primary key attribute values , the only filter opertaion allowoed is equle 
A scan operation scans the entire table.You can specify filters to apply to the results to refine the values 
returned to you, after the complete scan */

/*good practice to design your table for applications to use Query instead of Scan. 
Because a scan operation always scan the entire table before it filters out the desired values, 
which means it takes more time and space to process data operations
 such as read, write and delete*/


//Get data using Query operation 
export async function queryGet(event, context, callback) {
  const queryParams = {
    TableName: "Quotes",
    // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId': only return items with matching 'userId'
    //   partition key
    // 'ExpressionAttributeValues' defines the value in the condition
    // - ':userId': defines 'userId' 
    KeyConditionExpression: "quoteId = :quoteId",
    ExpressionAttributeValues: {
      ":quoteId": event.pathParameters.quoteId
    }
  };

  try {
    const result = await dynamoDbLib.call("query", queryParams);
    callback(null, success(result.Items));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}

//Get data using scan operation 
// we get get all data in table using scan opertion by just pass table name in params 
export async function scanGet(event, context, callback) {
  const scanParams = {
    TableName: 'Quotes',
    FilterExpression: "quoteId = :quoteId",
    ExpressionAttributeValues: {
      ":quoteId": event.pathParameters.quoteId
    }
  };

  try {
    var Review = await dynamoDbLib.call("scan", scanParams);
    // Return the matching list of items in response body
    callback(null, success(result.Items));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}