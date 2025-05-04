import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueProcessor } from './queue.processor';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'stream',
      limiter: {
        max: 10,
        duration: 10000,
      },
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [],
  providers: [QueueService, QueueProcessor],
  exports: [QueueService],
})
export class QueueModule {}
