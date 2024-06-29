import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string) {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Custom Error',
        message,
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
