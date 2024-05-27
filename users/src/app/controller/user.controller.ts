import { HttpRequest, HttpResponse } from "../../infra/http/httpAdapter"
import { UserUseCase } from "../useCases/user.useCase";

export class UserController {
    constructor(private readonly userUseCase: UserUseCase) { }
    getUsers(httpRequest: HttpRequest): HttpResponse {


        try {
            const { id } = httpRequest.query;

            const response = this.userUseCase.getUsers();


            return {
                status: 200,
                message: response,
            }
        } catch (error) {
            return {
                status: 500,
                message: ' Internal server error '
            }
        }

    }
}