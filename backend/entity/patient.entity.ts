

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, Unique } from "typeorm";

@Entity('Patient')
export class Patient {
  @PrimaryGeneratedColumn()
  id: string;


}

