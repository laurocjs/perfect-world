CREATE TABLE public."user" (
    user_id  SERIAL PRIMARY KEY,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    security_code character varying(255),
    passwordchangerequest boolean
);

CREATE TABLE public."user_preferences" (
    preferences_id  SERIAL PRIMARY KEY,
    user_fk integer,
    character integer,
    sky integer,
    ground integer,
    textbox text,
    textbox_title character varying(255),
    audio_path character varying(255)
);

CREATE TABLE public."user_image" (
    image_id  SERIAL PRIMARY KEY,
    user_fk integer,
    image_path character varying(255)
);


