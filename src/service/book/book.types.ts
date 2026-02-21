import z from "zod";

const PostBookPayload = z.object({
  name: z.string(),
  password: z.string(),
  bookName: z.string(),
  review: z.string(),
  emotion: z.string(),
  isOngoing: z.boolean(),
});

export { PostBookPayload };
