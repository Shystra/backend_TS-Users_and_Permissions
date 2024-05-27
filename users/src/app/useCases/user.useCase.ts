import { CreateUserDto } from '../../domain/entities/dtos/user.dto';
import { User } from '../../domain/entities/user.entity';
import {UsersRepository} from '../repositories/user.repository';

class UserUseCase {
    constructor(private readonly userRepository: UsersRepository) { }

    public async create(createUserDto: CreateUserDto): Promise<User | undefined >{
        try {
            const result = await this.userRepository.create(createUserDto);
            return result
        } catch (error) {
            console.log("🚀 ~ UserUseCase ~ create ~ error:", error);
        }
    }
}

export { UserUseCase };