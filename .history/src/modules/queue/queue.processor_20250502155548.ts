import { Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueProcessor {
  @Process('transcode')
  handleTranscode(job: any) {
    console.log(job.data);
    return {};
  }
}
