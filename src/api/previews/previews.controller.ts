import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('previews')
@Controller('previews')
export class PreviewsController {}
