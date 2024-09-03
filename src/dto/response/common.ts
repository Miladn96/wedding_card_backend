export class CommonResponse<T> {
    data: T;
    errors: any;
    message: string;
    devErrors: any;

    constructor(data: T,message: string, errors?: any, devErrors?: any) {
        this.data = data;
        this.errors = errors;
        this.devErrors = devErrors;
        this.message = message;
    }
}
