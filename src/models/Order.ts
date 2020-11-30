import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
 } from 'typeorm';

 @Entity('orders')
 class Order {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   totalPrice: number;

   @Column()
   done: boolean;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
 }

 export default Order;
