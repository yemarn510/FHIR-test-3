import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DropdownItem } from 'models/common.models';
import { GENDERS, PREFIX_EN_CONSTANTS, PREFIX_TH_CONSTANTS } from 'constant/prefix.constants';
import { Patient } from 'entity/patient.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('prefix')
  getPrefix(): {
    th: DropdownItem[];
    en: DropdownItem[];
  } {
    return {
      th: PREFIX_TH_CONSTANTS,
      en: PREFIX_EN_CONSTANTS
    };
  }

  @Get('gender')
  getGenders(): DropdownItem[] {
    return GENDERS;
  }

  @Post('patient')
  async savePatient(
    @Body() data: Patient,
  ): Promise<Patient> {
    return await this.appService.savePatient(data);
  }
}
