import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    LoggerModule.forRoot('DynamicModule Logs ===> Hi Man How Are U???'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
