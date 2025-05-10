# Panduan Deployment di Vercel

Ini adalah panduan untuk men-deploy website E-Undangan ke Vercel.

## Cara Deploy

### Opsi 1: Deploy dari GitHub

1. Push kode ini ke repositori GitHub Anda
2. Buat akun di [Vercel](https://vercel.com)
3. Klik "Add New" → "Project"
4. Import repositori GitHub yang berisi proyek ini
5. Pada halaman konfigurasi, gunakan pengaturan berikut:
   - **Framework Preset**: Other
   - **Build Command**: `./vercel-build.sh` 
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Klik "Deploy"

### Opsi 2: Deploy dari Vercel CLI

1. Install Vercel CLI: `npm install -g vercel`
2. Login ke Vercel: `vercel login`
3. Jalankan command di root directory: `vercel`
4. Ikuti petunjuk yang diberikan

## Konfigurasi yang Diterapkan

Proyek ini sudah dikonfigurasi untuk Vercel dengan:

1. File `vercel.json` untuk routing dan pengaturan serverless
2. Folder `api` untuk fungsi serverless
3. Script build khusus `vercel-build.sh`

## Troubleshooting

Jika mengalami masalah saat deployment:

1. Periksa log build di dashboard Vercel
2. Pastikan semua path di `vercel.json` sudah benar
3. Verifikasi bahwa file `.gitignore` tidak mengabaikan file-file penting

## Perhatian

- API diimplementasikan sebagai serverless functions yang berjalan on-demand
- Data disimpan di memori sehingga akan di-reset setiap kali aplikasi di-deploy ulang
- Untuk kebutuhan data yang persisten, Anda perlu menggunakan database seperti Supabase, MongoDB Atlas, atau layanan database lainnya.
