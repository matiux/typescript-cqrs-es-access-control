require('module-alias/register')
import {NestFactory} from '@nestjs/core';
import {AppModule} from '@root/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    // app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3000);
}

bootstrap();