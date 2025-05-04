import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { QueueModule } from './modules/queue/queue.module';
import { BullModule } from '@nestjs/bull';
import { ZipperModule } from './modules/zipper/zipper.module';
import { IdentifyMiddleware } from './common/middlewares/identify.middleware';

@Module({
  imports: [
    QueueModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ZipperModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdentifyMiddleware).forRoutes('*');
  }
}
