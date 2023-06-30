import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/orm-config';
import { Patient } from 'entity/patient.entity';
import { FhirService } from './fhir.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmConfigService),
    TypeOrmModule.forFeature([Patient]),
  ],
  controllers: [AppController],
  providers: [AppService, FhirService],
})
export class AppModule {}
