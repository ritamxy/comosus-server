import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UserModule } from 'user/user.module';
import { UserService } from 'user/user.service';
import { INestApplication } from '@nestjs/common';

describe('User', () => {
  let app: INestApplication;
  const userService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(UserService)
      .useValue(UserService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET`, () => {
    return request(app.getHttpServer()).get('/').expect(200).expect({
      data: UserService.findAll(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
