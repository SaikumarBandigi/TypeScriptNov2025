type ApiResponse = {
    status: 'success' | 'failure';
    error?: string;
    data?: string;
}

function ResponseAct(res: ApiResponse) {
    if (res.status === 'success') {
        console.log(res.data);
    } else {
        console.log(res.error);
    }
}

const apiR: ApiResponse = {
    status: 'success',
    data: 'completed'
}

ResponseAct(apiR)