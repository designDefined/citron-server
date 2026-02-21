import { z } from "zod";

const PostUserPayload = z.object({
  name: z.string(),
  password: z.string(),
});

export { PostUserPayload };
