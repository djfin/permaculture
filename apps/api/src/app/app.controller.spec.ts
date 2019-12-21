import { Test, TestingModule } from '@nestjs/testing';
import * as mongoose from 'mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from '@permaculture/data';
import { Model } from 'mongoose';
import { UserSchema } from 'libs/data/src/lib/data.schema';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { UserInt } from 'libs/data/src/lib/data.interface';
import { UsersModule } from './users.module';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController
  let appService: AppService
  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appService = app.get<AppService>(AppService)
    appController = app.get<AppController>(AppController)
  });

  describe('getData', ()=> {
    it('should return an array of users', async () => {
      const user = new User('testUser','pass','dfinley001@regis.edu','name','name');
      const userModel: Model<UserInt> = mongoose.model('User', UserSchema);
      const newUser = new userModel(user).save();
      const result = userModel.find().exec();
      jest.spyOn(appService, 'findAll').mockImplementation(async ()=>result)
      expect(await appController.getData()).toEqual(result);
    });
  });
});

/* Spent a few hours trying to get this to work to no avail. 
Here are some of the resources I tried using: https://docs.nestjs.com/fundamentals/testing
https://docs.nestjs.com/techniques/mongodb ,   https://mongoosejs.com/docs/guide.html */
