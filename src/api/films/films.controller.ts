import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFilmDto } from './dto/create-film.dto';

@ApiTags('films')
@Controller('films')
export class FilmsController {

  @Post()
  createFilm(@Body() createFilmDto: CreateFilmDto) {
    return createFilmDto;
  }
}
