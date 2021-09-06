// Packages
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// Context / Store / Router
// Components / Classes
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

@Entity() // this tells TypeORM that this is our representation for a table of `Pets`
@ObjectType() // this tells GraphQL what an object type of `Pet` should look like for the its schema
export class Pet {
   @PrimaryGeneratedColumn()
   @Field(type => Int)
   public id: number;

   @Column()
   @Field()
   public name: string;

   @Column({ nullable: true })
   @Field({ nullable: true })
   public type?: string;

   constructor() {}
}
