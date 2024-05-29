import { CreateUserDto } from "../../domain/entities/dtos/user.dto";
import { HttpRequest, HttpResponse } from "../../infra/http/httpAdapter"
import { UserUseCase } from "../useCases/user.useCase";
import { HttpError } from "../errors/httpError";
import { response } from "express";

export class UserController {
    constructor(private readonly userUseCase: UserUseCase) { }
    async create(httpRequest: HttpRequest): Promise<HttpResponse> {
        // const {name, email, password, permission_id} = httpRequest.body;
        const createUserDto: CreateUserDto = httpRequest.body;
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

    async findAll(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { key } = httpRequest.params;
        try {
            const response = await this.userUseCase.findAllusers(key);
            return {
                status: 200,
                message: 'Users found successfully',
                data: response
            }

        } catch (error: any) {
            return {
                status: error.status,
                message: error.message
            }
        }
    }

    async update(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest.params;
        const updateUserDto: CreateUserDto = httpRequest.body;
        try {
            const response = await this.userUseCase.update(id, updateUserDto);
            return {
                status: 200,
                message: 'Users update',
                data: response
            }
        } catch (error: any) {
            return {
                status: error.status,
                message: error.message,
            }
        }
    }


    async delete(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest.params;
        try {
            const response = await this.userUseCase.delete(id);
            return {
                status: 200,
                message: 'User deleted',
                data: response
            }
        } catch (error: any) {
            return {
                status: error.status,
                message: error.message,
            }
        }
    }


    async authenticate(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { email, password } = httpRequest.body;
        try {
            const user = await this.userUseCase.authenticate(email, password);
            if (user) {
                return {
                    status: 200,
                    message: 'Authentication successful',
                    data: user
                };
            } else {
                return {
                    status: 401,
                    message: 'Invalid credentials'
                };
            }
        } catch (error: any) {
            return {
                status: 500,
                message: error.message,
            };
        }
    }
}