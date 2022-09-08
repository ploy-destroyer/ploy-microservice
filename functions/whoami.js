export const handler = async (event, context) => {
    // const eventBody = JSON.parse(event.body);
    const timestamp = Date.now() / 1000 | 0;
    let ipaddress;
    let language;
    let software;

    let statusCode = 500; //Internal Server Error
    try {
        ipaddress = event.headers['x-real-ip'];
        language = event.headers['accept-language'];
        software = event.headers['user-agent'];
        statusCode = 200;
    } catch (er) {
        console.log(er);
        statusCode = 500;
    }

    return {
        statusCode,
        body: JSON.stringify({ ipaddress, language, software })
    }
}