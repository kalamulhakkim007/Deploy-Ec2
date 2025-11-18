import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD Example')
    .setDescription('API documentation for NestJS + Prisma CRUD')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // <-- this makes /api endpoint

  await app.listen(3001, '0.0.0.0');
  console.log(`Application is running on: http://localhost:3001`);
  console.log(`Swagger docs: http://localhost:3001/api`);
}
bootstrap();
