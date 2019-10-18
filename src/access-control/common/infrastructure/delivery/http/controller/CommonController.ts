import { Controller, Get, Header, Res, HttpStatus } from '@nestjs/common';

@Controller('')
export class CommonController {

  @Get()
  @Header('content-type', 'application/json')
  index() {

    let foo = 1;

    return {project: 'Typescript CQRS Access Control'};
  }
}
