import { Router } from "express";
import { adapterRoutes } from "../adapters/adapterRoutes";
import { UserController } from "../../app/controller/user.controller";
import { UserUseCase } from "../../app/useCases/user.useCase";
import { makeUserFactory } from "../factories/user.factory";


export const UserRoutes = (router: Router): void => {
    // const userUseCase = new UserUseCase();
    const userController = new UserController(makeUserFactory());
    const prefix = '/users';
    router.post(prefix + '', adapterRoutes(userController, 'create'));
    router.get(prefix + '/:key', adapterRoutes(userController, 'findAll'));
    router.put(prefix + '/:id', adapterRoutes(userController, 'update'));
    router.delete(prefix + '/:id', adapterRoutes(userController, 'delete'));
};