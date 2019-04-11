const Users = require('./users-model.js');

// Allows us to access DB
const db = require('../data/dbConfig.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  describe('add', () => {
    it('should add a user', async () => {
      let user = await Users.add({ username: 'guillermo', password: '123' });
      expect(user.username).toBe('guillermo');

      user = await Users.add({ username: 'testing', password: '123' });
      expect(user.username).toBe('testing');
    })
  })
})