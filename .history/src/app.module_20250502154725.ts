import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomMiddleware } from './common/middlewares/log.middleware';
import { BigDataController } from './modules/big-data/big-data.controller';

@Module({
  imports: [],
  controllers: [BigDataController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMiddleware).forRoutes('*');
  }
}
