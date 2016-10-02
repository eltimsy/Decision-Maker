DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS choices CASCADE;
DROP TABLE IF EXISTS votes_by_array CASCADE;
DROP TABLE IF EXISTS votes_by_vote CASCADE;
DROP TABLE IF EXISTS session CASCADE;

CREATE TABLE users (
  user_id bigserial PRIMARY KEY,
  username varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  email varchar(100) NOT NULL
);

CREATE TABLE questions (
  question_id bigserial PRIMARY KEY,
  question text NOT NULL,
  admin_url text NOT NULL,
  poll_url text NOT NULL,
  user_id bigint REFERENCES users (user_id) ON DELETE CASCADE
);

CREATE TABLE choices (
  choice_id bigserial PRIMARY KEY,
  choice_name varchar(100) NOT NULL,
  description text,
  question_id bigint REFERENCES questions (question_id) ON DELETE CASCADE
);

CREATE TABLE votes_by_array (
  vote_id bigserial PRIMARY KEY,
  preferences bigint[] NOT NULL,
  question_id bigint REFERENCES questions (question_id) ON DELETE CASCADE
);

-- votes_by_array stores choice_ids in the preference array
-- votes_by_vote just stores choice_ids alongside vote value

CREATE TABLE votes_by_vote (
  vote_id bigserial PRIMARY KEY,
  vote_value integer NOT NULL,
  question_id bigint REFERENCES questions (question_id) ON DELETE CASCADE,
  choice_id bigint REFERENCES choices (choice_id) ON DELETE CASCADE
);

CREATE TABLE session (
  session_id text PRIMARY KEY NOT DEFERRABLE INITIALLY IMMEDIATE COLLATE "default",
  expire timestamp(6) NOT NULL,
	user_id bigint REFERENCES users (user_id) ON DELETE CASCADE
) WITH (OIDS=FALSE);

-- I put this code aside to examine again, should we find that
-- the sess column needs more than just a foreign key pointing
-- to users.

-- CREATE TABLE session (
--   session_id text PRIMARY KEY NOT DEFERRABLE INITIALLY IMMEDIATE COLLATE "default",
-- 	sess jsonb NOT NULL,
-- 	expire timestamp(6) NOT NULL
-- ) WITH (OIDS=FALSE);
