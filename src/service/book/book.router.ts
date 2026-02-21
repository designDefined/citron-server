import { Hono } from "hono";

import { db } from "../../db/index.js";
import { BookRepository } from "./book.repository.js";
import { PostBookPayload } from "./book.types.js";

const bookPrefix = "/books";
const bookRouter = new Hono();
const bookRepository = new BookRepository(db);

bookRouter.get("/", async c => {
  const books = await bookRepository.readBooks();
  return c.json({ books });
});

bookRouter.post("/", async c => {
  const payload = await c.req.json().then(data => PostBookPayload.parse(data));
  await bookRepository.createBook(payload);
  return c.json({ success: true });
});

export { bookPrefix, bookRouter };
