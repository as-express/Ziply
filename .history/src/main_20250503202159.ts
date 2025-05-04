import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/exception.filter';
import { RequestInterceptor } from './common/interceptors/req.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app;
  app.setGlobalPrefix('api');

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new RequestInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
