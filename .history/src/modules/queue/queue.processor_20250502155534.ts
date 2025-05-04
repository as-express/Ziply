import { Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';

@Injectable()
@Process('queue')
export class QueueProcessor {}
