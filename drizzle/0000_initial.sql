CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200) NOT NULL,
	"password" varchar(200) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE INDEX "users_name_index" ON "users" USING btree ("name");--> statement-breakpoint
CREATE INDEX "users_created_at_index" ON "users" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "users_updated_at_index" ON "users" USING btree ("updated_at");