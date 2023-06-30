import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/orm-config';
import { Patient } from 'entity/patient.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmConfigService),
    TypeOrmModule.forFeature([Patient]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
