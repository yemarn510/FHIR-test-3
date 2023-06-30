import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'entity/patient.entity';
import { FHIRPatient } from 'models/common.models';
import { Repository } from 'typeorm';
import { FhirService } from './fhir.service';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
    private fhir: FhirService,
  ) {
  }

  async savePatient(data: Patient): Promise<Patient> {
    const patient = await this.patientRepository.create(data);
    return await this.patientRepository.save(patient);
  }

  async getFhirPatient(): Promise<FHIRPatient> {
    const patient = await this.patientRepository.findOne({
      where: { id: 1 },
    });

    return  {
      resourceType: 'Patient',
      identifier: [ this.fhir.thaiIDIdentifier(patient.thaiID) ],
      active: patient.active,
      name: [
        this.fhir.name(patient.nameTH),
        this.fhir.name(patient.nameEN),
      ],
      gender: patient.gender,
      birthDate: patient.birthDate,
    }
  }
  
}
