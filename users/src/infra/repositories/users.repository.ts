import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma";
import { CreateUserDto } from "../../domain/entities/dtos/user.dto";
import { UsersRepository } from "../../app/repositories/user.repository";
import { User } from "../../domain/entities/user.entity";

class UsersRepositoryPrisma implements UsersRepository{
    prisma: PrismaClient;
    constructor(){
        this.prisma = prisma;

    }
    async create(createUserDto: CreateUserDto): Promise<User>{
        return await  this.prisma.user.create({
            data:{
                ...createUserDto,
            }
        })
    }
}

export { UsersRepositoryPrisma };