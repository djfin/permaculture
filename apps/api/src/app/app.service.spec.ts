import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import{ Project, GardenBed, User, Zone } from '@permaculture/data';
import { INestApplication } from '@nestjs/common';
import { UserInt } from 'libs/data/src/lib/data.interface';

const mockAppService = {
  getUserById: ()=>{
    const user = new User('','','','','');
    return Promise.resolve(user);
  }
}

describe('AppService', () => {
  let service: AppService;
  let app: INestApplication
  const user = new User('testUser', 'password', 'domain@example.com', 'name', 'name');
  let userService = {findAll: ()=>Array<UserInt>()}

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('Should get all Users', ()=>{
    
  })
  it('Should get a user', ()=>{
    

  })
});
