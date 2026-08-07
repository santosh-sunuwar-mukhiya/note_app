const WINDOW_MS = 20 * 1000; // 20 seconds
const MAX_REQUESTS = 10;
const clients = new Map();

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.headers["x-forwarded-for"] || req.connection?.remoteAddress || "unknown";
  const currentTime = Date.now();
  const client = clients.get(ip) || { count: 0, startTime: currentTime };

  if (currentTime - client.startTime > WINDOW_MS) {
    client.count = 0;
    client.startTime = currentTime;
  }

  client.count += 1;
  clients.set(ip, client);

  if (client.count > MAX_REQUESTS) {
    return res.status(429).json({
      message: "Too many requests, please try again later",
    });
  }

  next();
};

export default rateLimiter;