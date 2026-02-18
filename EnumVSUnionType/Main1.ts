type Status = 'success' | 'error';

type ApiResponse = {
    status: Status;
    data?: string
    error?: string
}


function getTheResponse(api: ApiResponse) {
    if (api.status === 'success') {
        console.log('yo man');

    }
}

const obj: ApiResponse = {
    status: 'success',
    data: '200'
}

getTheResponse(obj)