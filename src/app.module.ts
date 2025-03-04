import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';
import { FlightModule } from './flight/flight.module';
@Module({
  imports: [
    ConfigModule.forRoot({
    //configuracion del archivo .env
    envFilePath: ['.env.development'],
    isGlobal: true,
  }),
  //conexion a la base de datos
  MongooseModule.forRoot(process.env.URI_MONGODB || 'mongodb://localhost:27017/superflights'),
  UserModule,
  PassengerModule,
  FlightModule],
  controllers: [AppController],
  providers: [AppService],
}
)
export class AppModule { }
