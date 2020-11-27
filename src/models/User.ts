import {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   CreateDateColumn,
   UpdateDateColumn ,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column('timestamp')
  dateOfBirth: Date;

  @Column()
  genre: string;

  @Column()
  celphone: string;

  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  description: string;

  @Column()
  zipCode: string;

  @Column()
  neighborhood: string;

  @Column()
  reference: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
