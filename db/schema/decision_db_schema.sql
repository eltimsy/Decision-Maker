DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS choices CASCADE;
DROP TABLE IF EXISTS votes_by_array CASCADE;
DROP TABLE IF EXISTS votes_by_vote CASCADE;
DROP TABLE IF EXISTS session CASCADE;

CREATE TABLE users (
  user_id integer PRIMARY KEY,
  firstname varchar(30) NOT NULL,
  lastname varchar(30) NOT NULL,
  password varchar(30) NOT NULL,
  email varchar(100) NOT NULL
);

CREATE TABLE questions (
  question_id integer PRIMARY KEY,
  question text NOT NULL,
  admin_url text NOT NULL,
  poll_url text NOT NULL,
  user_id integer REFERENCES users (user_id)
);

CREATE TABLE choices (
  choice_id integer PRIMARY KEY,
  choice_name varchar(100) NOT NULL,
  description text,
  question_id integer REFERENCES questions (question_id)
);

CREATE TABLE votes_by_array (
  vote_id integer PRIMARY KEY,
  preferences integer[] NOT NULL
  question_id integer REFERENCES questions (question_id),
);

-- votes_by_array stores choice_ids in the preference array
-- votes_by_vote just stores choice_ids alongside vote value

CREATE TABLE votes_by_vote (
  vote_id integer PRIMARY KEY,
  vote_value integer NOT NULL,
  question_id integer REFERENCES questions (question_id),
  choice_id integer REFERENCES choices (choice_id)
);

-- if there are future issues, try using json instead of jsonb
-- for now, however, jsonb is generally more performant
-- except for the initial write

CREATE TABLE session (
  session_id text PRIMARY KEY NOT DEFERRABLE INITIALLY IMMEDIATE COLLATE "default",
	session_user integer REFERENCES users (user_id),
	expire timestamp(6) NOT NULL
) WITH (OIDS=FALSE);

-- I put this code aside to examine again, should we find that
-- the sess column needs more than just a foreign key pointing
-- to users.

-- CREATE TABLE session (
--   session_id text PRIMARY KEY NOT DEFERRABLE INITIALLY IMMEDIATE COLLATE "default",
-- 	sess jsonb NOT NULL,
-- 	expire timestamp(6) NOT NULL
-- ) WITH (OIDS=FALSE);
