import { Table } from "sst/node/table";
import handler from "../../core/src/handler";
import dynamoDb from "./dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body || "{}");

  const params = {
    TableName: Table.Notes.tableName,
    Key: {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      noteId: event?.pathParameters?.id, // The id of the note from the path
    },
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null,
    },
    // where ALL_NEW returns all attributes of the item after the update; 
    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(params);

  return JSON.stringify({ status: true });
});