import { Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';

@Process('queue')
@Injectable()
export class QueueProcessor {}
