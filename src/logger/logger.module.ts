import { DynamicModule, Module } from '@nestjs/common';
import { LOGGER_VALUE } from './logger.constant';
import { LoggerServiceCostum } from './logger.service';

@Module({})
export class LoggerModule {
  public static forRoot(value: any): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_VALUE,
          useValue: value,
        },
        LoggerServiceCostum,
      ],
      exports: [LoggerServiceCostum],
    };
  }
}
