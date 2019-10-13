import { Controller, Get, Res, HttpStatus } from '@nestjs/common';

@Controller('')
export class CommonController {

  @Get()
  index(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

}