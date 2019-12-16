import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UserSchema } from 'libs/data/src/lib/data.schema';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class UsersModule {}