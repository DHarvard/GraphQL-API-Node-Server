# Migration `20200424162502-init`

This migration has been generated by DHarvard at 4/24/2020, 4:25:02 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Ingredients" (
    "id" text  NOT NULL ,
    "quantity" text  NOT NULL DEFAULT '',
    "recipe" text   ,
    "title" text  NOT NULL DEFAULT '',
    "type" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Recipe" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "id" text  NOT NULL ,
    "imageUrl" text  NOT NULL DEFAULT '',
    "instructions" text []  ,
    "title" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."simpleRecipe" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "id" text  NOT NULL ,
    "ingredients" text []  ,
    "title" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 

ALTER TABLE "public"."Ingredients" ADD FOREIGN KEY ("recipe")REFERENCES "public"."Recipe"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200424162502-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,33 @@
+datasource db {
+    provider = "postgresql"
+    url = "postgresql://postgres:docker@localhost:5432/pg-docker?schema=public"
+}
+
+generator client {
+    provider = "prisma-client-js"
+}
+model Ingredients {
+    id String @default(cuid()) @id
+    title String 
+    quantity String
+    type String
+}
+
+model Recipe {
+    id String @default(cuid()) @id
+    createdAt DateTime @default(now())
+    updatedAt DateTime @updatedAt
+    title String
+    instructions String[]
+    ingredients Ingredients[]
+    // ingredients String[]
+    imageUrl String
+}
+
+model simpleRecipe {
+    id String @default(cuid()) @id
+    createdAt DateTime @default(now())
+    updatedAt DateTime @updatedAt
+    title String
+    ingredients String[]
+}
```

