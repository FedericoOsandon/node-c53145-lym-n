import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// (router / controller) /users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)

    if(!createUserDto.first_name || !createUserDto.last_name || !createUserDto.email || !createUserDto.password) throw new HttpException('incomplete values', HttpStatus.BAD_REQUEST)
    return this.usersService.create(createUserDto);
  }

  @Post('/:ejemplo')
  probarRquest(@Request() req){
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    return 'todos los parametros'
  }


  // findAll(@Query() query) {
  //   const { limit, nombre } = query

  @Get()
  findAll(@Query('limit') limit) {  
    console.log(limit)   
    const users = this.usersService.findAll();
    return { status: "success", users }
  }


  //     /:uid
  @Get(':id')
  findOne(@Param('id') id: string) {
    if(isNaN(+id)) throw new  HttpException('invalid param', HttpStatus.BAD_REQUEST) 
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
