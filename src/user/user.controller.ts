import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')

export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() UserDto: UserDto) {
        return this.userService.create(UserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() UserDto: UserDto) {
        return this.userService.update(id, UserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
