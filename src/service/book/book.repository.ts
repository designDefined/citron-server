import { Repository } from "../../core/repository.js";
import { booksTable } from "../../db/db.schema.js";

class BookRepository extends Repository {
  async createBook({
    name,
    password,
    bookName,
    review,
    emotion,
    isOngoing,
  }: {
    name: string;
    password: string;
    bookName: string;
    review: string;
    emotion: string;
    isOngoing: boolean;
  }) {
    await this.db.insert(booksTable).values({
      name,
      password,
      bookName,
      review,
      emotion,
      isOngoing,
    });
  }

  async readBooks() {
    const books = await this.db.select().from(booksTable);
    return books;
  }
}

export { BookRepository };
