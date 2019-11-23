import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountService {
  constructor(@InjectModel('User') private readonly model: Model<User>) {}

  create(data: User): Promise<User> {
    const user = new this.model(data);
    return user.save();
  }
}
