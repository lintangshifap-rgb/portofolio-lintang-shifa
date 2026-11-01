# Portofolio Lintang Shifa Prameswari, A.Md.Kep

Website statis untuk GitHub Pages. Versi publik hanya menampilkan foto dan menyediakan preview; tidak memiliki fitur edit atau unggah foto.

## Berkas untuk diunggah

- `index.html` di direktori utama repository.
- Seluruh folder `assets/`, termasuk `styles.css` dan `images/`.
- `README.md` dan `tools/` boleh disimpan di repository, tetapi tidak diperlukan untuk membuka halaman.

## Deploy ke GitHub Pages

1. Buat repository publik dan unggah berkas di atas.
2. Buka Settings > Pages.
3. Pilih Deploy from a branch, branch `main`, dan folder `/ (root)`.
4. Simpan, tunggu proses publikasi, lalu buka URL yang ditampilkan GitHub.

Jangan beri akses tulis repository kepada pengunjung. Repository publik memungkinkan orang melihat dan menyalin berkas, tetapi tidak mengubah repository milikmu tanpa izin.

## Mengganti foto

Ganti berkas yang sesuai di `assets/images/`, lalu unggah perubahan ke repository. Jika nama berkas berubah, sesuaikan juga `src` di `index.html`. Nama berkas dan huruf besar/kecil harus sama persis.

## Mengubah tampilan

CSS siap pakai tersedia di `assets/styles.css`; pengunjung tidak memerlukan Node.js. Jika mengubah kelas Tailwind di HTML atau tema di `tools/tailwind.config.cjs`, bangun ulang CSS dari direktori proyek dengan Node.js/npm:

```powershell
npm exec --yes --package=tailwindcss@3.4.17 -- tailwindcss -c tools/tailwind.config.cjs -i tools/tailwind.css -o assets/styles.css --minify
```

Unggah juga CSS hasilnya. Font Google dan ikon Font Awesome masih dimuat dari layanan eksternal.
