import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Kalamul Hakkim' })
  name: string;

  @ApiProperty({ example: 24 })
  age: number;

  @ApiProperty({ example: 'kalamulhakkim007@gmail.com' })
  email: string;
}
