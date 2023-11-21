-- settings.sql
CREATE DATABASE strive;
CREATE USER striveuser WITH PASSWORD 'strive';
GRANT ALL PRIVILEGES ON DATABASE strive TO striveuser;