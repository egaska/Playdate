DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE events(
  id INT NOT NULL AUTO_INCREMENT,
  event_name VARCHAR(120) NOT NULL,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);