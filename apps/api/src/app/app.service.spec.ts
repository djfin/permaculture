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
});
