import rateLimit from "../config/upstash.js";

export async function rateLimiter(req, res, next) {
  try {
    const { success } = await rateLimit.limit("my-limit-key");
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later!" });
    }
    next();
  } catch (error) {
    console.error("Rate limit error", error);
    next(error);
  }
}
