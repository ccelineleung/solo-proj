CREATE TABLE users(
user_id serial PRIMARY KEY,
name varchar(255) NOT NULL UNIQUE,
password varchar(255) NOT NULL,
)

CREATE TABLE homedata(
id SERIAL PRIMARY KEY,
name varchar(255) NOT NULL,
homevalue numeric NOT NULL,
downpayment numeric NOT NULL,
loanamount numeric NOT NULL,
interestrate numeric NOT NULL,
loanterm numeric NOT NULL,
payment numeric NOT NULL,
username 
user_id integer 
FOREIGN KEY (user_id) REFERENCES users(user_id),

) 



