export default function makePostUser({addUser, logger}) {
    return async function postUser(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const {uid} = httpRequest.decodedToken;
            const user = await addUser({...httpRequest.body, uid});
            return {
                headers,
                statusCode: 200,
                body: user
            };
        } catch(err) {
            logger.error(err.message, {location: __filename});
            return {
                headers,
                statusCode: 400,
                body: {
                    error: err.message
                }
            };
        }
    }
}
