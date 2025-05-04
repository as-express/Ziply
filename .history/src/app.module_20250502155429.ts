import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomMiddleware } from './common/middlewares/log.middleware';
import { BigDataModule } from './modules/big-data/big-data.module';
import { QueueModule } from './modules/queue/queue.module';

@Module({
  imports: [BigDataModule, QueueModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMiddleware).forRoutes('*');
  }
}
