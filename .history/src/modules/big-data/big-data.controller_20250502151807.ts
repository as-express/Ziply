import { Controller } from '@nestjs/common';
import { BigDataService } from './big-data.service';

@Controller('big-data')
export class BigDataController {
  constructor(private readonly bigDataService: BigDataService) {}
}
