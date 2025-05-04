import { Controller, Get, HttpCode, UseInterceptors } from '@nestjs/common';
import { BigDataService } from './big-data.service';
import { RequestInterceptor } from 'src/common/interceptors/req.interceptor';

@Controller('big-data')
export class BigDataController {
  constructor(private readonly bigDataService: BigDataService) {}

  @Get()
  @HttpCode(550)
  test() {
    return 'WoW';
  }
}
