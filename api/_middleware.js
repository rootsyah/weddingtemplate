// Middleware untuk semua API routes
export default function middleware(req, res, next) {
  // Mengatur CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request untuk CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Lanjutkan ke handler berikutnya
  return next();
}