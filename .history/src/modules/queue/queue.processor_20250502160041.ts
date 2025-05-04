import { OnQueueProgress, Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bullmq';

// @Injectable()
export class QueueProcessor {
  @Process('stream')
  handleTranscode(job: Job) {
    console.log(job.data);
    return {};
  }

  @OnQueueProgress()
  showProgress(job: Job) {
    console.log(job.progress);
  }
}
