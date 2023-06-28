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

INSERT INTO smartphone (model, os, ram_memory, storage, screen_size, network, charger)
VALUES
    ('iPhone 12', 'iOS', 6, 128, 6.1, '4G', 1),
    ('Samsung Galaxy S21', 'Android', 8, 256, 6.2, '5G', 1),
    ('Google Pixel 5', 'Android', 8, 128, 6, '5G', 1),
    ('OnePlus 9 Pro', 'Android', 12, 256, 6.7, '5G', 1),
    ('Xiaomi Mi 11', 'Android', 8, 128, 6.81, '5G', 1),
    ('Sony Xperia 1 III', 'Android', 12, 256, 6.5, '5G', 1),
    ('iPhone 11', 'iOS', 4, 64, 6.1, '4G', 1),
    ('Samsung Galaxy S20', 'Android', 12, 128, 6.2, '5G', 1),
    ('Google Pixel 4a', 'Android', 6, 128, 5.81, '4G', 1),
    ('OnePlus 8 Pro', 'Android', 12, 256, 6.78, '5G', 1),
    ('Xiaomi Mi 10', 'Android', 8, 128, 6.67, '5G', 1),
    ('Sony Xperia 5 III', 'Android', 8, 128, 6.1, '5G', 1),
    ('iPhone SE', 'iOS', 3, 64, 4.7, '4G', 1),
    ('Samsung Galaxy Note 20', 'Android', 8, 256, 6.7, '5G', 1),
    ('Google Pixel 3', 'Android', 4, 64, 5.5, '4G', 1);

INSERT INTO user (firstname, lastname, email, password, role)
VALUES
    ('John', 'Doe', 'john.doe@example.com', 'password123', '{"role": "user"}'),
    ('Jane', 'Smith', 'jane.smith@example.com', 'securepass', '{"role": "user"}'),
    ('Michael', 'Johnson', 'michael.johnson@example.com', 'mypass123', '{"role": "admin"}'),
    ('Sarah', 'Williams', 'sarah.williams@example.com', 'password@123', '{"role": "user"}'),
    ('David', 'Brown', 'david.brown@example.com', 'abc123', '{"role": "user"}'),
    ('Emily', 'Davis', 'emily.davis@example.com', 'password456', '{"role": "user"}'),
    ('Daniel', 'Anderson', 'daniel.anderson@example.com', 'password789', '{"role": "user"}'),
    ('Olivia', 'Martinez', 'olivia.martinez@example.com', 'mypassword', '{"role": "user"}'),
    ('James', 'Taylor', 'james.taylor@example.com', 'qwerty123', '{"role": "user"}'),
    ('Sophia', 'Clark', 'sophia.clark@example.com', 'password321', '{"role": "user"}');
