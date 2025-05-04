import { Controller, Get, HttpCode } from '@nestjs/common';
import { BigDataService } from './big-data.service';

@Controller('big-data')
export class BigDataController {
  constructor(private readonly bigDataService: BigDataService) {}

  @Get()
  test() {
    return 'WoW';
  }
}
