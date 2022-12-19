
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

//Tipagem para o returno da função
import { User } from './entities/user.entity';

//Para recuperar os dados da solicitação na forma de uma promise.
import { firstValueFrom } from 'rxjs';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  async getUsers(): Promise<User[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<User[]>('https://jsonplaceholder.typicode.com/users/')
      );
      if (Array.isArray(data)) {
        data.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        return data.filter(item => item.id < 6)
      } else {
        throw new Error
      }
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
