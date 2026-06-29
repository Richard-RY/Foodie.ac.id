# 🍳 Foodie — Website Resep Online + SPK ORESTE

Foodie adalah website resep makanan online yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini bisa diunggah ke GitHub Pages dan sudah memiliki fitur Sistem Pendukung Keputusan menggunakan metode ORESTE.

## Fitur

- Tampilan modern, cerah, dan hangat
- Auto scrolling menu viral
- Search resep berdasarkan nama, kategori, deskripsi, atau bahan
- Filter kategori resep
- Upload resep lokal menggunakan localStorage
- SPK rekomendasi makanan menggunakan metode ORESTE
- Tabel ranking dan skor akhir ORESTE
- Responsive untuk laptop dan HP

## Kriteria SPK ORESTE

| Kode | Kriteria | Jenis |
|---|---|---|
| C1 | Harga Bahan | Cost |
| C2 | Waktu Memasak | Cost |
| C3 | Tingkat Kesulitan | Cost |
| C4 | Rating | Benefit |
| C5 | Nilai Gizi | Benefit |

Keterangan:

- Cost: nilai lebih kecil lebih baik.
- Benefit: nilai lebih besar lebih baik.
- Skor ORESTE paling kecil menjadi rekomendasi terbaik.

## Cara Menjalankan

1. Extract file ZIP.
2. Buka `index.html` di browser.
3. Untuk upload ke GitHub, masukkan semua file ke repository.
4. Aktifkan GitHub Pages dari menu `Settings > Pages`.

## Struktur File

```text
foodie-oreste/
├── index.html
├── style.css
├── script.js
└── README.md
```
