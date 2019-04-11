# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser ('jsdom')

window => global

## new tools 

cross-env = npm pack. used to abstract away OS differenes setting environment variables

DB_ENV=testing