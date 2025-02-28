import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/filters/interceptors/timeout.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //filter for all exceptions, el que maneja los errores
  app.useGlobalFilters(new AllExceptionFilter());
  //interceptor for all requests timeout, el que maneja el tiempo de espera
  app.useGlobalInterceptors(new TimeOutInterceptor());
  //validation pipe for all requests, el que maneja las validaciones
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
