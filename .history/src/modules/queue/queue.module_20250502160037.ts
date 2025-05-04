import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { QueueProcessor } from './queue.processor';

@Module({
  controllers: [QueueController],
  providers: [QueueService, QueueProcessor],
})
export class QueueModule {}
