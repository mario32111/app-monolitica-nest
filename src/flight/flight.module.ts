import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHT } from 'src/common/models/models';
import { FlightSchema } from './schema/flight.schema';
import { PassengerModule } from 'src/passenger/passenger.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGHT.name,
        useFactory: () => {
          //este plugin es para que se muestren los pasajeros en la consulta de vuelos y no solo los id
          FlightSchema.plugin(require('mongoose-autopopulate'));
          return FlightSchema;
        }
      }
    ]), 
    PassengerModule
  ],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
