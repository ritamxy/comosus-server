import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';


describe('StudentService', () => {
  let studentService: UserService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: ApiService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, ApiServiceProvider],
    }).compile();

    studentService = module.get<UserService>(UserService);
  });

  it('StudentService - should be defined', () => {
    expect(UserService).toBeDefined();
  });

  describe('getUser', () => {
    it('should get User info', async () => {
      const expectedGpa = 3.8;
      const gpa = await userService.getGpa('Jane', 'Doe');
      expect(gpa).toEqual(expectedGpa);
    });
  });
});