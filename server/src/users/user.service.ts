import { getMongoManager, MongoEntityManager } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

    private mongoManager: MongoEntityManager;

    async getAllUsers(): Promise<UserEntity[]> {
        return await getMongoManager("mongo").find(UserEntity);
    };

    async getUser(firstName: string): Promise<UserEntity[]> {
        return await getMongoManager("mongo").find(UserEntity, {
            first: firstName
        });
    }

};