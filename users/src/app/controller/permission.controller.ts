import { HttpRequest, HttpResponse } from "../../infra/http/httpAdapter"
import { PermissionUseCase } from "../useCases/permission.usecase";
import { CreatePermissionDto, UpdatePermissionDto } from "../../domain/entities/dtos/permission.dto";

export class PermissionController {
    constructor(public readonly permissionUseCase: PermissionUseCase){}
    async create(httpRequest: HttpRequest): Promise<HttpResponse>{
        // const {name, email, password, permission_id} = httpRequest.body;
        const createPermissionDto:CreatePermissionDto = httpRequest.body;
        try {
            const response = await this.permissionUseCase.create(createPermissionDto)
            return {
                status: 201,
                message: 'User created successfully!',
                data: response,
            }

        } catch (error: any) {
            console.log("🚀 ~ UserController ~ create ~ error:", error)
            return {
                status: error.status,
                message: error.message,
            }; 
        }
    }


    async update(httpRequest: HttpRequest): Promise<HttpResponse>{
        const updatePermissionDto:UpdatePermissionDto = httpRequest.body;
        const key = httpRequest.params.key;
        try{
        const response = await this.permissionUseCase.update(key, updatePermissionDto);
        return {
            status: 200,
            message: 'User updated successfully!',
            data: response,
        };


        } catch(error: any){
        console.log("🚀 ~ PermissionController ~ update ~ error:", error)
            return{
                status: error.status,
                message: error.message,
            };
        }
    }

    async delete(httpRequest: HttpRequest): Promise<HttpResponse>{
        const key = httpRequest.params.key;
        try{
        const response = await this.permissionUseCase.delete(key);
        return {
            status: 200,
            message: 'User deleted successfully!',
        };
        } catch(error: any){
        console.log("🚀 ~ PermissionController ~ update ~ error:", error)
            return{
                status: error.status,
                message: error.message,
            };
        }
    }



    async show(httpRequest: HttpRequest): Promise<HttpResponse>{
        const key = httpRequest.params.key;
        try{
        const response = await this.permissionUseCase.show(key);
        return {
            status: 200,
            message: 'User find successfully!',
            data: response,
        };


        } catch(error: any){
        console.log("🚀 ~ PermissionController ~ update ~ error:", error)
            return{
                status: error.status,
                message: error.message,
            };
        }
    }
}