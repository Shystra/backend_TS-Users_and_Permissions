import { User } from "../../domain/entities/user.entity"
import { CreateUserDto } from "../../domain/entities/dtos/user.dto";

export abstract class UsersRepository{
    // abstract findAll(): Promise<any>;
    // abstract findById(): Promise<any>;

    abstract create(createUserDto:  CreateUserDto): Promise<User>;

}