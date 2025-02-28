import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { mongoseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [ConfigModule.forRoot({
    //configuracion del archivo .env
    envFilePath: ['.env.developmend'],
    isGlobal: true,
  }),
  //conexion a la base de datos
  mongoseModule.forRoot(process.env.URI_MONGODB),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
