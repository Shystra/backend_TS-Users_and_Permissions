import { CreateUserDto } from '../../domain/entities/dtos/user.dto';
import { User } from '../../domain/entities/user.entity';
import { HttpError } from '../errors/httpError';
import { UsersRepository } from '../repositories/user.repository';

class UserUseCase {
    constructor(private readonly userRepository: UsersRepository) { }

    public async create(createUserDto: CreateUserDto): Promise<User> {

        const result = await this.userRepository.create(createUserDto);
        return result;
    }

    public async findAllusers(key:string): Promise<User[]>{
        const result = await this.userRepository.findAllusers(key);
        return result;
    }

    public async update(id: string, updateUserDto: CreateUserDto): Promise<User>{
        const result = await this.userRepository.update(id, updateUserDto);
        return result;
    }

    public async delete(id: string): Promise<boolean>{
        const result = await this.userRepository.delete(id);
        return result;
    }








    public async authenticate(email: string, password: string): Promise<User | null> {
        const user = await this.userRepository.findByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

}

export { UserUseCase };