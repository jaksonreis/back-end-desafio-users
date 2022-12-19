//Um módulo é uma classe anotada com um @Module()decorador. 
//O @Module()decorador fornece metadados que o Nest usa para organizar a estrutura do aplicativo.

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


//Importar o HTTP Module para poder-mos usar nos provides e fazer a requisição a API
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [
    HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//Controllers
//Os controladores são responsáveis ​​por lidar com as solicitações recebidas e retornar as respostas ao cliente.


//Providers
//Muitas das classes Nest básicas podem ser tratadas como providers: 
//services, repositories, factories, helpers, e assim por diante. 
//A ideia principal de um provedor é que ele pode ser injetado como uma dependência,
// isso significa que os objetos podem criar vários relacionamentos entre si, e a função de "conectar" instâncias
// de objetos pode ser amplamente delegada ao sistema de tempo de execução do Nest.