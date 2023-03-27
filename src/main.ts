import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Altcoins P/ Análise')
    .setDescription('API para votação de altcoins para análise semanal')
    .setVersion('1.0')
    .addTag('altcoins')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

// yarn run start:dev
// yarn prisma studio
// yarn prisma migrate dev
// nest g module cats
// ??yarn prisma generate
