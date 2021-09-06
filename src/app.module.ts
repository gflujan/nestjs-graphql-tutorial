// Packages
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Module } from '@nestjs/common';
// Context / Store / Router
// Components / Classes
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

@Module({
   imports: [
      GraphQLModule.forRoot({
         autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),
      PetsModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
