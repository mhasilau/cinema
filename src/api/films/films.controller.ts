import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('films')
@Controller('films')
export class FilmsController {}
