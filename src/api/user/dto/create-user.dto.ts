import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateUserDto {
  @ApiModelProperty()
  fullName: string;

  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  password: string;
}
