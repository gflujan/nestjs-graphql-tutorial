// Packages
import { Injectable } from '@nestjs/common';
// Context / Store / Router
// Components / Classes
import { Pet } from './pet.entity';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

@Injectable()
export class PetsService {
   async findAll(): Promise<Array<Pet>> {
      const pet = new Pet();
      pet.id = 1;
      pet.name = 'Rambo';

      return [pet];
   }
}
