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
}

export { UserUseCase };