import { CreatePermissionDto, UpdatePermissionDto } from '../../domain/entities/dtos/permission.dto';
import { Permission } from '../../domain/entities/permission.entity';
import { HttpError } from '../errors/httpError';
import { PermissionRepository } from '../repositories/permission.repository';


class PermissionUseCase {
    constructor(private readonly permissionRepository: PermissionRepository) { }

    public async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
        if(!createPermissionDto.key || !createPermissionDto.title){
            throw new HttpError(400, 'Key and title are required');
        };
        if(createPermissionDto.key !== 'admin' && createPermissionDto.key !== 'customer'){
            throw new HttpError(400, 'Key must be admin or customer');
        }

        // verifica se a permissão ja existe no banco
        const permission = await this.permissionRepository.findByKey(createPermissionDto.key)
        console.log("🚀 ~ PermissionUseCase ~ create ~ permission:", permission)
        if(permission && permission.deleted_at === null) throw new HttpError(400, 'Permission already exists');


        const result = await this.permissionRepository.create(createPermissionDto);
        return result;
    }

    async update(id: string, updatePermissionDto: UpdatePermissionDto){
        const verifyIfExistsPermission = await this.permissionRepository.findByKey(id,);
        if(!verifyIfExistsPermission) throw new HttpError(400, 'Permission not found');
        
        const result = await this.permissionRepository.update(verifyIfExistsPermission.id, updatePermissionDto);
        return result;
    }

    async delete(key: string){
        const verifyIfExistsPermission = await this.permissionRepository.findByKey(key,);

        if(!verifyIfExistsPermission) throw new HttpError(400, 'Permission not found');
        if(verifyIfExistsPermission.deleted_at !== null ) throw new HttpError(400, 'Permission not found')
        
        const result = await this.permissionRepository.delete(verifyIfExistsPermission.id);
        return result;
    }

    async show(key: string){
        const result = await this.permissionRepository.findByKey(key);
        if(!result) throw new HttpError(400, 'Permission not found');
        if(result.deleted_at !== null ) throw new HttpError(400, 'Permission not found')
        return result;
    }



}

export { PermissionUseCase };