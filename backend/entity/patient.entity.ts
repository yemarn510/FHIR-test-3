

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, Unique } from "typeorm";

@Entity('Patient')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  nameTH: { prefix: string, family: string, given: string};

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  nameEN: { prefix: string, family: string, given: string};

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  thaiID: string;

  @Column({ nullable: true })
  birthDate: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;
}

