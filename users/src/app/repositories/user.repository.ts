import { User } from "../../domain/entities/user.entity"
import { CreateUserDto } from "../../domain/entities/dtos/user.dto";

export abstract class UsersRepository{
    // abstract findAll(): Promise<any>;
    // abstract findById(): Promise<any>;

    abstract create(createUserDto:  CreateUserDto): Promise<User>;
    abstract findAllusers(key: string): Promise<User[]>;
    abstract update(id: string, createUserDto: CreateUserDto): Promise<User>
    abstract delete(id:string): Promise<boolean>
    abstract findByEmail(email: string): Promise<User | null>;
    
} 