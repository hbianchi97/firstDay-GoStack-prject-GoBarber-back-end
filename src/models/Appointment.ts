import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')  //adiciona como se fosse uma nomeclatura
class Appointment {  //diz que isso será salvo dentro da tabela de appointments
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

}

export default Appointment;
