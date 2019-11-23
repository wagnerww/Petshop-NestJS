import {
  NestInterceptor,
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Contract } from 'src/backoffice/contracts/contract';
import { Result } from 'src/backoffice/models/result.model';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
  constructor(public contract: Contract) {}

  intercept(ctx: ExecutionContext, call$: CallHandler): Observable<any> {
    const body = ctx.switchToHttp().getRequest().body;
    const valid = this.contract.validate(body);

    if (!valid) {
      throw new HttpException(
        new Result('Ops, algo saiu errado', false, null, this.contract.errors),
        HttpStatus.BAD_REQUEST,
      );
    }
    return call$.handle().pipe();
  }
}
