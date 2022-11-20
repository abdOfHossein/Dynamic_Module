import { Inject, Injectable } from '@nestjs/common';
import { LOGGER_VALUE } from './logger.constant';

@Injectable()
export class LoggerServiceCostum {
  constructor(@Inject(LOGGER_VALUE) private readonly value: any) {
    console.log(this.value);
  }

}
