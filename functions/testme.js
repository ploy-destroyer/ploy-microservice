export const handler = async (event, context) => {
    // const eventBody = JSON.parse(event.body);
    const timestamp = Date.now() / 1000 | 0;

    let statusCode = 500; //Internal Server Error
    try {
        // console.log(event);
        // console.log(context);
        statusCode = 200;
    } catch (er) {
        console.log(er);
        statusCode = 500;
    }

    return {
        statusCode,
        body: JSON.stringify({
            event,
            context,
            timestamp
        })
    }
}