import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomMiddleware } from './common/middlewares/log.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMiddleware).forRoutes('*');
  }
}
