const Users = require('./users-model.js');

// Allows us to access DB
const db = require('../data/dbConfig.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  describe('add', () => {
    it('should add a user and find by id (built-in)', async () => {
      let user = await Users.add({ username: 'guillermo', password: '123' });
      expect(user.username).toBe('guillermo');

      user = await Users.add({ username: 'testing', password: '123' });
      expect(user.username).toBe('testing');
    })

    it('should add the provided users and find them all', async () => {
      await Users.add({ username: 'guillermo', password: '123' });
      await Users.add({ username: 'guillermo1', password: '123' });
      await Users.add({ username: 'guillermo2', password: '123' });

      const users = await Users.find();
      expect(users).toHaveLength(3);
    });

    it('should add users and find by name filter', async () => {
      await Users.add({ username: 'guillermo', password: '123' });
      await Users.add({ username: 'testing', password: '123' });

      let user1 = await Users.findBy({ username: 'guillermo'});
      let user2 = await Users.findBy({ username: 'testing'});

      expect(user1.username).toBe('guillermo');
      expect(user2.username).toBe('testing');
    })
  })
})