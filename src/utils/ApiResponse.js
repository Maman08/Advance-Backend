class ApiResponse extends Error {
    constructor(message="success", statusCode,data){
        this.statusCode=statusCode,
        this.data=data,
        this.message=message,
        this.success=statusCode<400
    } 
}