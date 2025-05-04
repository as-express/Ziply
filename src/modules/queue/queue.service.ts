import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('stream') private readonly job: Queue) {}

  async addJob(data: any) {
    await this.job.add(
      'stream',
      { data },
      { removeOnComplete: true, removeOnFail: false },
    );
  }
}
