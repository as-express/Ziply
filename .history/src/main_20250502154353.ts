import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestInterceptor } from './common/interceptors/req.interceptor';
import { HttpExceptionFilter } from './common/filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new RequestInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
