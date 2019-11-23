import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from 'src/schemas/customer.schema';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Customer',
        schema: CustomerSchema,
      },
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [CustomerController],
})
export class BackofficeModule {}
