import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import{ Project, GardenBed, User, Zone } from '@permaculture/data';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });
  let user:User;
  describe('addUser',()=>{
    it('should add a user',()=>{
      user = new User('testUser','testPass','testEM','testFN','testLN');
      const success = service.addUser(user);
      expect(success).toEqual(1);
    })
  })
  describe('login User',()=>{
    it('should login a user',()=>{
      let success = service.login('testUser','testPass');
      expect(success).toEqual(user);
    })
  })
});
