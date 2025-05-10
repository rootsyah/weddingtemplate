// Handler untuk root API path
export default function handler(req, res) {
  return res.json({
    message: 'API E-Undangan berhasil dijalankan',
    endpoints: [
      '/api/templates',
      '/api/templates/featured',
      '/api/templates/:id',
      '/api/testimonials',
      '/api/contact'
    ]
  });
}