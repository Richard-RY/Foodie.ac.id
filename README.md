# 🍜 Foodie — Website Resep Makanan Online 
Foodie adalah website resep makanan online yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini cocok dipublikasikan melalui GitHub Pages karena tidak membutuhkan backend atau database.

## Fitur

- Tampilan modern, cerah, dan hangat
- Search resep makanan
- Filter kategori resep
- Upload resep makanan secara lokal menggunakan `localStorage`
- Sistem Pendukung Keputusan rekomendasi makanan menggunakan metode ORESTE
- Tabel ranking hasil ORESTE
- Responsive untuk laptop, tablet, dan HP

## Kriteria SPK ORESTE

Website ini menggunakan 5 kriteria:

| Kode | Kriteria | Jenis |
|---|---|---|
| C1 | Harga bahan | Cost |
| C2 | Waktu memasak | Cost |
| C3 | Tingkat kesulitan | Cost |
| C4 | Rating | Benefit |
| C5 | Nilai gizi | Benefit |

Keterangan:

- Cost berarti nilai lebih kecil lebih baik.
- Benefit berarti nilai lebih besar lebih baik.
- Skor ORESTE lebih kecil berarti alternatif lebih direkomendasikan.

## Cara Menggunakan di GitHub Pages

1. Buat repository baru di GitHub.
2. Upload semua file: `index.html`, `style.css`, `script.js`, dan `README.md`.
3. Buka menu **Settings**.
4. Pilih **Pages**.
5. Pada bagian **Branch**, pilih `main` dan folder `/root`.
6. Klik **Save**.
7. Tunggu beberapa saat sampai link GitHub Pages aktif.

## Catatan Upload Resep

Fitur upload resep di website ini masih menggunakan penyimpanan lokal browser. Artinya, resep yang ditambahkan hanya tersimpan di browser pengguna yang sedang membuka website. Jika ingin data tersimpan online untuk semua pengguna, website perlu dikembangkan menggunakan backend/database seperti Firebase, Supabase, atau PHP + MySQL.
