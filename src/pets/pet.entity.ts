import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pet {
   @Field(type => Int)
   public id: number;

   @Field()
   public name: string;

   @Field({ nullable: true })
   public type?: string;

   constructor() {}
}
