import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('stream')) {}
}
