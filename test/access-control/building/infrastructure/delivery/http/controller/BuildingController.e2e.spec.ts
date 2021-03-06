import {Test, TestingModule} from '@nestjs/testing';
import * as request from 'supertest';
import {AppModule} from '@root/app.module';

describe('BuildingController (e2e)', () => {
    let app;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (POST)', async () => {

        const response = await request(app.getHttpServer())
            .post('/building')
            .expect(201);

        expect(response.body.id).toMatch(new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'));
    });
});
