import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { Result } from '../models/result.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.constracts';
import { CreateCustomerDto } from '../dtos/create-customer-dto';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'obter os clientes';
  }

  @Get(':document')
  getById(@Param('document') document) {
    return `obter o cliente ${document}`;
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post(@Body() body: CreateCustomerDto) {
    return body;
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return new Result('Cliente alterado com suceso', true, body, null);
  }

  @Delete()
  delete() {
    return 'apaga os clientes';
  }
}
