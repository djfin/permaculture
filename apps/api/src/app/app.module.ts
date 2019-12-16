import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { UsersModule } from './users.module'
@Module({
  imports: [ UsersModule,
    MongooseModule.forRoot('mongodb://localhost/api')
  ],
})
export class AppModule {}
