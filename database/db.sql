CREATE DATABASE notes;

USE notes;

-- TABLE USER
-- all pasword wil be encrypted using SHA1
CREATE TABLE users (
  id INT(11) NOT NULL,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL
);


ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;


INSERT INTO users (id, username, password, fullname) 
  VALUES (1, 'john', 'password1', 'John Carter');

SELECT * FROM users;


-- TABLE  QUICK NOTES
CREATE TABLE quick_notes (
  id INT(11) NOT NULL,
  text TEXT,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);
ALTER TABLE quick_notes
  ADD PRIMARY KEY (id);

ALTER TABLE quick_notes MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE quick_notes;

--   TABLE notes
CREATE TABLE notes (
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  contact_id INT(11),
  link_id INT(11),
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk2_user FOREIGN KEY(user_id) REFERENCES users(id),
  CONSTRAINT fk_contact FOREIGN KEY(contact_id) REFERENCES contacts(id),
  CONSTRAINT fk1_link FOREIGN KEY(link_id) REFERENCES links(id)
);

ALTER TABLE notes
  ADD PRIMARY KEY (id);

ALTER TABLE notes MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE notes;

--  TABLE categorys
CREATE TABLE categorys (
  id INT(11) NOT NULL,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(150) NOT NULL
);

ALTER TABLE categorys
  ADD PRIMARY KEY (id);

ALTER TABLE categorys MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE categorys;

--  TABLE contacts
CREATE TABLE contacts (
  id INT(11) NOT NULL,
  fullname VARCHAR(150) NOT NULL,
  number INT(50) NOT NULL,
  email VARCHAR(150) NOT NULL,
  t_contact VARCHAR(150) NOT NULL,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT f_user FOREIGN KEY(user_id) REFERENCES users(id));

ALTER TABLE contacts
  ADD PRIMARY KEY (id);

ALTER TABLE contacts MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE contacts;

--  TABLE t_phones
CREATE TABLE t_phones (
  id INT(11) NOT NULL,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(150) NOT NULL
);

ALTER TABLE  t_phones 

  ADD PRIMARY KEY (id);

ALTER TABLE t_phones MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE t_phones;


