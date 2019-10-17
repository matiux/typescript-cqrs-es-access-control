import { Controller, Get, Header, Res, HttpStatus } from '@nestjs/common';

@Controller('')
export class CommonController {

  @Get()
  @Header('content-type', 'application/json')
  index() {
    return {project: 'Typescript CQRS Access Control'};
  }

}
