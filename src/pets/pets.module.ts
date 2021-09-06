// Packages
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Context / Store / Router
// Components / Classes
import { Pet } from './pet.entity';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

@Module({
   imports: [TypeOrmModule.forFeature([Pet])],
   providers: [PetsService, PetsResolver],
})
export class PetsModule {}
