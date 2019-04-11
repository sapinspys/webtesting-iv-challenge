# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser ('jsdom')

window => global

## new tools 

__cross-env__ => npm pack. used to abstract away OS differenes setting environment variables

__DB_ENV=testing__ => used for deployment too!

# Setting up PG on Heroku
 * Head to Heroku
 * Set up new application
 * Sync from GitHub
 * Resources > Add-ons > Heroku Postgres
	 * Automatically adds config variable in settings
 * Change Knex configuration
	 * Add production key using new DB
		 * client: pg
		 * connection: `DATABASE_URL` || localPG {host, database, user, password}
		 * same migrations & seeds as before
 * Change dbEnv in dbConfig
	 * `DB_ENV` || 'production'
 * Commit & push changes
 * Set `DB_ENV` config variable on Heroku
 * Run migrations on Heroku
	 * `npx heroku run knex migrate:latest -a <application>`