import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const timestamp = new Date().toString();

  const params = {
    TableName: "Quotes",
    Item: {
      quoteId: uuid.v1(),
      content: data.content,
      author: data.author,
      category:data.category,
      createdDate:timestamp,
      createdBy: data.createdBy
    }
  };
  try {
 
   const result  = await dynamoDbLib.call("put", params);

    callback(null, success(params.Item));
  } catch (e) {
    callback(null, failure(e));
  }
}