import { Router } from "express";
import { adapterRoutes } from "../adapters/adapterRoutes";
import { UserController } from "../../app/controller/user.controller";


export const UserRoutes = (router: Router): void => {
    const userController = new UserController();
    const prefix = '/users';
    router.get(prefix + "", adapterRoutes(userController, 'getUsers'));
};