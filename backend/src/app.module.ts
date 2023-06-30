import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/orm-config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmConfigService),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
