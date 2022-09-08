export const handler = async (event, context) => {
    // const eventBody = JSON.parse(event.body);
    const timestamp = Date.now() / 1000 | 0;
    let ipaddress;
    let language;
    let software;

    let statusCode = 500; //Internal Server Error
    try {
        if (event.headers['x-nf-client-connection-ip']) {
            ipaddress = event.headers['x-nf-client-connection-ip'];
        } else if (event.headers['x-real-ip']) {
            ipaddress = event.headers['x-real-ip'];
        } else {
            ipaddress = event.headers['x-forwarded-for'].split(',')[0];
        }
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