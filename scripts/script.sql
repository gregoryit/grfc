CREATE TABLE "users"(
    "id" INTEGER NOT NULL,
    "sudb_id" INTEGER NOT NULL,
    "position_id" INTEGER NOT NULL,
    "fio" VARCHAR(255) NOT NULL,
    "fio_r" VARCHAR(255) NOT NULL,
    "fio_d" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "roles"(
    "id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "roles" ADD PRIMARY KEY("id");
CREATE TABLE "subdivision"(
    "id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "subdivision" ADD PRIMARY KEY("id");
CREATE TABLE "users_roles"(
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL
);
CREATE TABLE "users_subdivisions"(
    "user_id" INTEGER NOT NULL,
    "subdivision_id" INTEGER NOT NULL
);
CREATE TABLE "menu"(
    "id" INTEGER NOT NULL,
    "name" INTEGER NOT NULL
);
ALTER TABLE
    "menu" ADD PRIMARY KEY("id");
CREATE TABLE "tree_menu"(
    "parent_id" INTEGER NOT NULL,
    "child_id" INTEGER NOT NULL
);
CREATE TABLE "roles_menu"(
    "role_id" INTEGER NOT NULL,
    "menu_id" INTEGER NOT NULL
);
CREATE TABLE "positions"(
    "id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "positions" ADD PRIMARY KEY("id");
ALTER TABLE
    "users_roles" ADD CONSTRAINT "users_roles_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "users_subdivisions" ADD CONSTRAINT "users_subdivisions_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_sudb_id_foreign" FOREIGN KEY("sudb_id") REFERENCES "subdivision"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_position_id_foreign" FOREIGN KEY("position_id") REFERENCES "positions"("id");
ALTER TABLE
    "roles_menu" ADD CONSTRAINT "roles_menu_role_id_foreign" FOREIGN KEY("role_id") REFERENCES "roles"("id");
ALTER TABLE
    "users_roles" ADD CONSTRAINT "users_roles_role_id_foreign" FOREIGN KEY("role_id") REFERENCES "roles"("id");
ALTER TABLE
    "users_subdivisions" ADD CONSTRAINT "users_subdivisions_subdivision_id_foreign" FOREIGN KEY("subdivision_id") REFERENCES "subdivision"("id");
ALTER TABLE
    "roles_menu" ADD CONSTRAINT "roles_menu_menu_id_foreign" FOREIGN KEY("menu_id") REFERENCES "menu"("id");
ALTER TABLE
    "tree_menu" ADD CONSTRAINT "tree_menu_parent_id_foreign" FOREIGN KEY("parent_id") REFERENCES "menu"("id");
ALTER TABLE
    "tree_menu" ADD CONSTRAINT "tree_menu_child_id_foreign" FOREIGN KEY("child_id") REFERENCES "menu"("id");