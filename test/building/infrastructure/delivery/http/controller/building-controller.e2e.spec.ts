import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import {AppModule} from '../../../../../../src/app.module';

describe('BuildingController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/building')
      .expect(201)
      .expect('I\'m a building!');
  });
});
