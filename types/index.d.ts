export interface ApiResponse {
    status:boolean;
    message:string;
    data:any;
}
// Paginated Response
export interface PaginatedApiResponse {
    status:boolean;
    message:string;
    data:{
        total:Number;
        pagination:Number;
        page:Number;
        pages:Number;
        filtered:Number;
        data:Array<any>;
    };
}
// Paginated Response
