/* POSTGRES DATABASE */

CREATE TABLE IF NOT EXISTS OPO_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS OPO_Test (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES OPO_users(id)
);

CREATE TABLE IF NOT EXISTS OPO_Questions (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS OPO_Test_Questions (
    id SERIAL PRIMARY KEY,
    test_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    FOREIGN KEY (test_id) REFERENCES OPO_Test(id),
    FOREIGN KEY (question_id) REFERENCES OPO_Questions(id)
);

CREATE TABLE IF NOT EXISTS OPO_Test_Answers (
    id SERIAL PRIMARY KEY,
    answer TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    isCorrect BOOLEAN NOT NULL,
    FOREIGN KEY (question_id) REFERENCES OPO_Questions(id)
);

CREATE TABLE IF NOT EXISTS OPO_Test_Responses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    test_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    response TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES OPO_users(id),
    FOREIGN KEY (test_id) REFERENCES OPO_Test(id),
    FOREIGN KEY (question_id) REFERENCES OPO_Test_Questions(id)
);
