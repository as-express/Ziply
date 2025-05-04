import { Module } from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { ZipperController } from './zipper.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Zipper, ZipperSchema } from './zipper.schema';
import { FileService } from 'src/common/utils/file.util';
import { QueueService } from '../queue/queue.service';
import { QueueProcessor } from '../queue/queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'stream',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    MongooseModule.forFeature([{ name: Zipper.name, schema: ZipperSchema }]),
  ],
  controllers: [ZipperController],
  providers: [ZipperService, FileService, QueueService, QueueProcessor],
})
export class ZipperModule {}
