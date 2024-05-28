import { PermissionUseCase } from "../../app/useCases/permission.usecase";
import { PermissionRepositoryPrisma } from "../../infra/repositories/permission.repository";


export const makePermissionFactory = () => {
    const permissionRepository = new PermissionRepositoryPrisma();
    const permissionUseCase = new PermissionUseCase(permissionRepository);
    return permissionUseCase;
}