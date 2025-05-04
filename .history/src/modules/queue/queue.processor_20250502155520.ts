import { Process } from '@nestjs/bull';

@Process('queue')
export class QueueProcessor {}
