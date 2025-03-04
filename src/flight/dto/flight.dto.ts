import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class FlightDto {
  @IsNotEmpty()
  @IsString()
  readonly pilot: string;
  @IsNotEmpty()
  @IsString()
  readonly airplane: string;    @IsNotEmpty()
  @IsString()
  readonly destinationCity: string;
  @IsNotEmpty()
  //esto es para que el campo sea de tipo fecha, transforma el string a fecha
  @Type(()=> Date)
  @IsDate()
  readonly flightDate: Date; 
}