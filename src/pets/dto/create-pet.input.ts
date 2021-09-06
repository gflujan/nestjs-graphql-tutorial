// Packages
import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';
// Context / Store / Router
// Components / Classes
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

@InputType()
export class CreatePetInput {
   @IsAlpha()
   @Field()
   public name: string;

   @Field({ nullable: true })
   public type?: string;

   constructor() {}
}
