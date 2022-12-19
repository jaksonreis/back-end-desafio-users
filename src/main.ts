import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3333);
}
bootstrap();


//Para criar uma instância do aplicativo Nest, usamos o NestFactory. 
//NestFactory expõe alguns métodos estáticos que permitem criar uma instância do aplicativo. 
//O método create() retorna um objeto de aplicação, que preenche a INestApplicationinterface.
