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

  describe('getData', () => {
  });
  let appService = new AppService();
  let user = new User('test','test','test','test','test');
  appService.addUser(user);
  console.log(appService.users);
  let project = new Project('test','test');
  appService.addProject('test',project);
  let gardenBed = new GardenBed('test','testbed');
  let zone = appService.addGardenBed('test','test','Zone 1',gardenBed);
  let zone1 = new Zone("Zone 1", "The zone closest to home");
  zone1.beds.push(gardenBed);
  describe('addGardenBed', ()=>{
    expect(zone).toEqual(zone1);

  })
});
