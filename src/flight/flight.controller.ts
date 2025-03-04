import { Body, Controller, Post, Get, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { FlightDto } from './dto/flight.dto';
import { FlightService } from './flight.service';
import { PassengerService } from 'src/passenger/passenger.service';
import { ApiTags } from '@nestjs/swagger';

//etiqueta en swagger
@ApiTags("Flights")
@Controller('api/v1/flight')
export class FlightController {
    constructor(
        private readonly flightService: FlightService,
        private readonly passengerService:PassengerService
    ){}

    @Post()
    create(@Body() flightDto: FlightDto) {
        return this.flightService.create(flightDto);
    }
    
    @Get()
    findAll() {
        return this.flightService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.flightService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() flightDto:FlightDto){
        return this.flightService.update(id, flightDto)
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.flightService.delete(id);
    }

    @Post(':flightId/passenger/:passengerId')
    //este medodo es un metodo asincrono por que esta llamando al servicionde pasajeros, no solamente al de flight
    async addPassenger(@Param('flightId') flightId: string, @Param('passengerId') passengerId: string){
        const passenger = await this.passengerService.findOne(passengerId);
        if(!passenger) throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND)

        return this.flightService.addPassenger(flightId, passengerId);
    }
}   
