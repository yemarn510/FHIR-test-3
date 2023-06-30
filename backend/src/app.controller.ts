import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DropdownItem } from 'models/common.models';
import { GENDERS, PREFIX_EN_CONSTANTS, PREFIX_TH_CONSTANTS } from 'constant/prefix.constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

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
}
