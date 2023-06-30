import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'entity/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {
  }

  async savePatient(data: Patient): Promise<Patient> {
    const patient = await this.patientRepository.create(data);
    return await this.patientRepository.save(patient);
  }
}
