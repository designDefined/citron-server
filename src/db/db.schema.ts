import {
  boolean,
  index,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * varchar lengths
 */
// const SHORT = 50;
const MEDIUM = 200;
// const LONG = 2000;
// const EMAIL = 254;
// const URL = 2048;

/**
 * timestamps
 */
const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
};

/**
 * tables
 */
export const usersTable = pgTable(
  "users",
  {
    id: serial().primaryKey(),
    name: varchar({ length: MEDIUM }).notNull(),
    password: varchar({ length: MEDIUM }).notNull(),
    ...timestamps,
  },
  table => [
    index().on(table.name),
    index().on(table.createdAt),
    index().on(table.updatedAt),
  ],
);

export const booksTable = pgTable("books", {
  id: serial().primaryKey(),
  name: varchar({ length: MEDIUM }).notNull(),
  password: varchar({ length: MEDIUM }).notNull(),
  bookName: varchar({ length: MEDIUM }).notNull(),
  review: varchar({ length: MEDIUM }).notNull(),
  emotion: varchar({ length: MEDIUM }).notNull(),
  isOngoing: boolean().notNull(),
  ...timestamps,
});
