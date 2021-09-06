// Packages
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
// Context / Store / Router
// Components / Classes
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
// Assets
// Constants / Models / Interfaces / Types
import { CreatePetInput } from './dto/create-pet.input';
// Utils / Methods / Mocks
// Styles

@Resolver(of => Pet)
export class PetsResolver {
   constructor(private petsService: PetsService) {}

   // NOTE :: Wherever you see an @Args declaration, I think that's so the GQL schema and documentation can have its own reference for what the incoming param types are supposed to be

   @Query(returns => Pet)
   fetchPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
      return this.petsService.findOne(id);
   }

   @Query(returns => [Pet])
   fetchAllPets(): Promise<Array<Pet>> {
      return this.petsService.findAll();
   }

   @Mutation(returns => Pet)
   createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet> {
      return this.petsService.createNewPet(createPetInput);
   }
}
