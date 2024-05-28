import { CreateUserDto } from "../../domain/entities/dtos/user.dto";
import { HttpRequest, HttpResponse } from "../../infra/http/httpAdapter"
import { UserUseCase } from "../useCases/user.useCase";
import { HttpError } from "../errors/httpError";

export class UserController {
    constructor(private readonly userUseCase: UserUseCase){}
    async create(httpRequest: HttpRequest): Promise<HttpResponse>{
        // const {name, email, password, permission_id} = httpRequest.body;
        const createUserDto:CreateUserDto = httpRequest.body;
        console.log("🚀 ~ UserController ~ create ~ createUserDto:", createUserDto)

        try {
            const response = await this.userUseCase.create(createUserDto)
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
            }
        }
    }
}