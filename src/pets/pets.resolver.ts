// Packages
import { Query, Resolver } from '@nestjs/graphql';
// Context / Store / Router
// Components / Classes
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

@Resolver(of => Pet)
export class PetsResolver {
   constructor(private petsService: PetsService) {}

   @Query(returns => [Pet])
   fetchAllPets(): Promise<Array<Pet>> {
      return this.petsService.findAll();
   }
}
