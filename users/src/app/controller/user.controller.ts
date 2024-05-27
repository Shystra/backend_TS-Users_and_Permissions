import { CreateUserDto } from "../../domain/entities/dtos/user.dto";
import { HttpRequest, HttpResponse } from "../../infra/http/httpAdapter"
import { UserUseCase } from "../useCases/user.useCase";

export class UserController {
    constructor(private readonly userUseCase: UserUseCase){}
    create(httpRequest: HttpRequest): HttpResponse{
        // const {name, email, password, permission_id} = httpRequest.body;
        const createUserDto:CreateUserDto = httpRequest.body;

        try {
            const response = this.userUseCase.create(createUserDto)
            return {
                status: 201,
                message: response,
            }

        } catch (error) {
            return {
                status: error.status,
                message: error.message,
            }
        }
    }
}