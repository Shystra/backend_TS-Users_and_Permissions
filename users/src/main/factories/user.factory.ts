import { UserUseCase } from "../../app/useCases/user.useCase"

export const makeUserFactory = () => {
    const userUseCase = new UserUseCase();
    return userUseCase;
}