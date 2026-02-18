enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let response: StatusCode = StatusCode.Success;
console.log(response);
