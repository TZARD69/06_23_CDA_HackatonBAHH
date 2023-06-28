create table smartphone
(
    id          int auto_increment
        primary key,
    model       varchar(25) not null,
    os          varchar(10) not null,
    ram_memory  int         not null,
    storage     int         not null,
    screen_size int         not null,
    network     varchar(2)  not null,
    charger     tinyint(1)  not null
);

create table user
(
    id        int auto_increment
        primary key,
    firstname varchar(50)  not null,
    lastname  varchar(50)  not null,
    email     varchar(100) not null,
    password  varchar(255) not null,
    role      json         not null,
    constraint user_pk2
        unique (email)
);

