import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { USER } from 'src/common/models/models'
import { IUser } from 'src/common/interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) {}

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }


    async create(userDto: UserDto): Promise<IUser> {
        const hash = await this.hashPassword(userDto.password);
        const newUser = new this.model({...userDto, hash});
        return await newUser.save();
    }   
}
