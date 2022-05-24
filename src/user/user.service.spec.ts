import { UserService } from './user.service';

describe('userService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = ['test'];
      jest.spyOn(userService, 'findAll').mockImplementation(() => result);

      expect(await userService.findAll()).toBe(result);
    });
  });
});