import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const timestamp = new Date().getTime();
  const params = {
    TableName: "Quotes",
    Item: {
      quoteId: uuid.v1(),
      content: data.content,
      author: data.attachment,
      category:data.category,
      createdDate:timestamp,
      createdBy: data.poster
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    callback(null, success(params.Item));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}