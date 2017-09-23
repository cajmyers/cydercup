CREATE TABLE scores (
id int,
type varchar(10),
hole_1 int,
hole_2 int,
hole_3 int,
hole_4 int,
hole_5 int,
hole_6 int,
hole_7 int,
hole_8 int,
hole_9 int,
hole_10 int,
hole_11 int,
hole_12 int,
hole_13 int,
hole_14 int,
hole_15 int,
hole_16 int,
hole_17 int,
hole_18 int
);

INSERT INTO scores VALUES (1, 'fourballs', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (2, 'fourballs', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (3, 'fourballs', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (4, 'fourballs', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (5, 'fourballs', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (6, 'fourballs', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (7, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (8, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (9, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (10, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (11, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (12, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (13, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (14, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (15, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (16, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (17, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO scores VALUES (18, 'singles', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

UPDATE players SET team = 'clydebank' WHERE team = 'clydebank ';

CREATE TABLE matchlist (
team varchar(30),
match int,
player1ID int, 
player2ID int 
);

INSERT INTO matchlist (team, match) VALUES ('mudhutters', 1);
INSERT INTO matchlist (team, match) VALUES ('mudhutters', 2);
INSERT INTO matchlist (team, match) VALUES ('mudhutters', 3);
INSERT INTO matchlist (team, match) VALUES ('mudhutters', 4);
INSERT INTO matchlist (team, match) VALUES ('mudhutters', 5);
INSERT INTO matchlist (team, match) VALUES ('mudhutters', 6);
INSERT INTO matchlist (team, match) VALUES ('clydebank', 1);
INSERT INTO matchlist (team, match) VALUES ('clydebank', 2);
INSERT INTO matchlist (team, match) VALUES ('clydebank', 3);
INSERT INTO matchlist (team, match) VALUES ('clydebank', 4);
INSERT INTO matchlist (team, match) VALUES ('clydebank', 5);
INSERT INTO matchlist (team, match) VALUES ('clydebank', 6);

CREATE TABLE singlesorder (
team varchar(30),
playerorder int,
playerid int
);

INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 1);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 2);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 3);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 4);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 5);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 6);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 7);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 8);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 9);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 10);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 11);
INSERT INTO singlesorder (team, playerorder) VALUES ('mudhutters', 12);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 1);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 2);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 3);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 4);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 5);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 6);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 7);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 8);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 9);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 10);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 11);
INSERT INTO singlesorder (team, playerorder) VALUES ('clydebank', 12);
