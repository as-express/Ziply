import { OnQueueProgress, Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueProcessor {
  @Process('stream')
  handleTranscode(job: any) {
    console.log(job.data);
    return {};
  }

  @OnQueueProgress()
  showProgress(job: any) {
    console.log(job.progress);
  }
}
