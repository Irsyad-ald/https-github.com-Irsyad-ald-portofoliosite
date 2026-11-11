# Penjelasan API Key & Rencana Pembersihan Arsitektur Data

Dokumen ini menjelaskan secara menyeluruh tentang variabel environment yang ada pada file `.env.example` (`SERVICE_DOMAIN`, `API_KEY`, dan `GAID`), fungsinya di website, cara mendapatkannya, serta rencana pembersihan ketergantungan microCMS dan penyiapan Google Analytics sesuai preferensi Anda.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **Keputusan yang Dikonfirmasi:**
> 1. **Pembersihan microCMS**: Menghapus ketergantungan API Key `microCMS` dari kode (`store/index.js` dan `nuxt.config.js`) agar website 100% mandiri menggunakan data konfigurasi lokal (`config/profile.js`) tanpa perlu registrasi akun atau langganan API eksternal.
> 2. **Google Analytics (GAID)**: Mempersiapkan struktur Google Analytics (Google tag `G-XXXXXXXXXX`) agar siap digunakan kapan saja Anda ingin memasukkan Measurement ID Anda sendiri.

---

## 1. Apa Itu API Key Tersebut & Untuk Apa Fungsinya?

Di dalam file `.env.example`, terdapat 3 variabel:

```env
SERVICE_DOMAIN=
API_KEY=
GAID=
```

### A. `SERVICE_DOMAIN` & `API_KEY` (microCMS)
* **Apa ini?**: Kredensial untuk layanan **microCMS** (sebuah platform *Headless CMS* berbasis cloud yang populer di Jepang tempat template aslinya dibuat).
* **Untuk apa?**: 
  - Pada template aslinya, microCMS digunakan untuk menarik daftar karya (`works`), pesan kontak (`contact`), dan penghargaan (`award`) melalui HTTP Request API.
  - Namun, pada versi portofolio Anda saat ini, **seluruh data karya, biografi, penghargaan, dan keahlian sudah dipindahkan secara lengkap ke dalam file lokal (`config/profile.js`)**.
  - Jika `SERVICE_DOMAIN` dan `API_KEY` kosong, website sudah secara otomatis menggunakan data lokal tersebut sebagai *fallback*. Karena Anda memilih menghapus ketergantungan ini, kita akan merapikan kode `store/index.js` dan `nuxt.config.js` sehingga tidak ada lagi panggilan jaringan atau *warning* konsol terkait microCMS.

### B. `GAID` (Google Analytics ID)
* **Apa ini?**: ID Pelacak dari **Google Analytics 4 (GA4)**, biasanya berformat `G-XXXXXXXXXX` (atau format lama `UA-XXXXXXXX-X`).
* **Untuk apa?**:
  - Untuk memantau statistik pengunjung website portofolio Anda secara real-time (jumlah pengunjung, asal negara, perangkat HP vs Laptop, halaman karya yang paling sering dilihat, durasi kunjungan, dll.).
  - Jika variabel ini belum diisi, script pelacak tidak akan mengirim data apa pun ke Google.

---

## 2. Cara Mendapatkan Kunci-Kunci Tersebut

### Cara Mendapatkan Google Analytics ID (`GAID`):
1. Buka [Google Analytics](https://analytics.google.com/) dan masuk menggunakan akun Google Anda (`ahmadirsyadald@gmail.com`).
2. Klik menu **Admin** (ikon roda gigi di kiri bawah) > pilih **Create Account** atau **Create Property**.
3. Beri nama properti (misalnya: *Portofolio Ahmad Irsyad Ald*), atur zona waktu Indonesia (WIB/GMT+7) dan mata uang Rupiah (IDR).
4. Pada bagian **Data Streams**, pilih platform **Web**.
5. Masukkan URL website Anda dan nama stream (misalnya: *Website Portofolio*), lalu klik **Create stream**.
6. Anda akan langsung mendapatkan **Measurement ID** berformat **`G-XXXXXXXXXX`**.
7. Salin kode `G-XXXXXXXXXX` tersebut dan masukkan ke dalam file `.env`:
   ```env
   GAID=G-XXXXXXXXXX
   ```

*(Catatan: Anda tidak perlu mendaftar ke microCMS lagi karena sistem penyimpanan data website Anda sudah dialihkan sepenuhnya ke file lokal yang cepat dan tanpa kuota API).*

---

## 3. Rencana Pembersihan & Arsitektur Kode Baru

### Diagram Arsitektur Data Baru (Tanpa Ketergantungan Eksternal)

```
┌────────────────────────────────────────────────────────┐
│             PUSAT DATA LOKAL WEBSITE                   │
│   • File: config/profile.js                            │
│   • Menyimpan Identitas, Bio, 7 Proyek, Skills, Kontak │
└───────────────────────────┬────────────────────────────┘
                            │ (Impor Langsung & Cepat)
                            ▼
┌────────────────────────────────────────────────────────┐
│                    VUEX STATE STORE                    │
│   • File: store/index.js                               │
│   • Bersih dari pemanggilan axios ke microCMS          │
│   • Zero Network Latency & Bebas Masalah API Down      │
└───────────────┬────────────────────────┬───────────────┘
                │                        │
                ▼                        ▼
┌──────────────────────────────┐ ┌───────────────────────┐
│     TAMPILAN SEMUA HALAMAN   │ │   GOOGLE ANALYTICS    │
│  (Home, Works, About, Arsip) │ │  (Opsional via GAID)  │
└──────────────────────────────┘ └───────────────────────┘
```

---

## 4. Langkah-Langkah Eksekusi (Setelah Anda Menyetujui Rencana Ini)

1. **Membersihkan `store/index.js`**:
   - Menghapus method `actions.nuxtServerInit` yang melakukan HTTP request ke `microcms.io`.
   - Menginisialisasi state Vuex langsung dari `config/profile.js` secara sinkron, membuat rendering halaman lebih instan.
2. **Membersihkan `nuxt.config.js`**:
   - Menghapus route generation dinamis microCMS di `generate.routes` dan menyederhanakannya menjadi rute lokal tetap untuk 7 proyek unggulan (`works/asovision`, `works/basta`, dst.).
   - Menghapus variabel env `serviceDomain` dan `apiKey`.
   - Memastikan script pelacakan `GAID` hanya diaktifkan jika variabel `GAID` benar-benar ada dan tidak kosong, sehingga tidak memicu error console di browser jika belum diisi.
3. **Memperbarui `.env.example`**:
   - Mengubah isinya menjadi bersih dan terfokus:
     ```env
     # Google Analytics 4 Measurement ID (Opsional, contoh: G-XXXXXXXXXX)
     GAID=
     ```
4. **Verifikasi & Build**:
   - Menjalankan `compile_applet` dan `lint_applet` untuk memastikan build aplikasi 100% sukses tanpa ada dependensi yang rusak.
