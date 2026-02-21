CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200) NOT NULL,
	"password" varchar(200) NOT NULL,
	"book_name" varchar(200) NOT NULL,
	"review" varchar(200) NOT NULL,
	"emotion" varchar(200) NOT NULL,
	"is_ongoing" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
