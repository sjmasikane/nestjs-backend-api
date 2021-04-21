import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('Test API')
  .setVersion('100')
  .setDescription('One by Two')
  .addTag('notes')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api',app,document);
  await app.listen(3001);
}
bootstrap();
