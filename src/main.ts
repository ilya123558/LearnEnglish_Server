import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: process.env.CLIENT_DOMEN})
  app.setGlobalPrefix('api');
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();