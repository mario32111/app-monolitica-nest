import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/filters/interceptors/timeout.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //filter for all exceptions, el que maneja los errores
  app.useGlobalFilters(new AllExceptionFilter());
  //interceptor for all requests timeout, el que maneja el tiempo de espera
  app.useGlobalInterceptors(new TimeOutInterceptor());
  //validation pipe for all requests, el que maneja las validaciones
  app.useGlobalPipes(new ValidationPipe());

  //integracion con swagger
  const options = new DocumentBuilder()
    .setTitle('SuperFlight API')
    .setDescription('Scheuled Flights App')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: {
      filter: true
    }
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
