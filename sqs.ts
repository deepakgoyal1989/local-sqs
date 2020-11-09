import AWS from "aws-sdk";

export class SQSService {

  public static send = async (message: string): Promise<any> => {
    AWS.config.update({
      region: 'us-west-2'
    });
    const sqs = new AWS.SQS();
    try {
      const params: AWS.SQS.SendMessageRequest = {
        MessageBody: message,
        QueueUrl: 'http://localhost:9324/queue/first-queue',
      };
      await sqs.sendMessage(params).promise();
    } catch (err) {
      console.log('err', err)
    }
  }
}
