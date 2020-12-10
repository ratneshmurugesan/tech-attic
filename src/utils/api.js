export const methodEnums = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DEL: 'DELETE',
};

const HTTP_STATUS = {
    200: {
        status: 200,
        name: 'SUCCESS',
        failure: false,
    },
    401: {
        name: 'AUTH',
        status: 401,
        message: 'Session timed out. Please login again.',
        // action: REDIRECT_URL.LOGIN,
        failure: true,
    },
    403: {
        name: 'PERMISSION',
        status: 403,
        message: 'You are not authorized to view this page.',
        // action: REDIRECT_URL.HOME,
        failure: true,
    },
    500: {
        name: 'FAILURE',
        status: 500,
        message: 'Something went wrong, please try again later',
        // action: REDIRECT_URL.HOME,
        failure: true,
    },
    400: {
        name: 'ERROR',
        status: 400,
        message: 'Something went wrong, please try again later - 400',
        failure: true,
    },
};

class EverestAPIError extends Error {
	constructor(errorObj) {
		super('Error');
		this.statusText = errorObj.statusText;
		this.statusCode = errorObj.statusCode || 500;
		this.name = 'EverestAPIError';
	}
}

async function handleErrors(response) {
	const result = await response.json();
	if (!response.ok) {
		// PubSub.publish('API_ERROR_RESULT', result);
		throw new EverestAPIError({
			statusCode: response.status,
			statusText: result.error,
		});
	}
	return result;
}

const getFetchOptions = (method, body = null) => {
    // console.log('getFetchOptions - body', body);
    const options = {
        method: methodEnums[method],
        headers: {
            'Content-type': 'application/json',
        },
        // redirect: 'follow',
        ...(body && { body: JSON.stringify(body) }),
    }
    return options;
}

export function dataCall(url, method, body) {
    const options = getFetchOptions(method, body);
    // console.log('dataCall - options', options);
    return fetch(url, options)
        .then(handleErrors)
        .then(response => {
            // console.log('dataCall', response);
            return response;
        })
        .catch(error => ({
            ...HTTP_STATUS[error.statusCode],
            ...(error.statusText && { message: error.statusText }),
        }));
}