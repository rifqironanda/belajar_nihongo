# Manabi — Belajar Nihongo

Dashboard React responsif untuk belajar bahasa Jepang dasar melalui situasi sehari-hari.

## Fitur

- 18 lesson Irodori Starter dengan `Can-do`, pola kalimat, kosakata, dan text-to-speech Jepang.
- Kuis Irodori 初級1 Bab 5 dengan 3 level: Medium, Hard, dan JLPT N4; masing-masing 30 soal dengan umpan balik dan pembahasan langsung.
- Medium fokus pada arti, pembuatan kalimat, bunpou, dan kanji Bab 5.
- Hard tetap memakai bunpou Bab 5, dengan kanji yang boleh mencakup bab Irodori lain.
- JLPT memakai kanji N4 dan bunpou N4/Irodori lintas bab.
- Simulasi per level: 30 soal / 30 menit, navigasi soal, skor otomatis, dan target latihan.
- Progres materi tersimpan di `localStorage`.
- Layout responsif untuk desktop, tablet, dan mobile.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

## Sumber dan batasan

- Bank latihan Bab 5 disusun berdasarkan Irodori 初級1 Lesson 5 「とてもにぎやかで便利です」: kosakata tentang kota/tempat, pola N/ナA-で・イA-くて, ～けど, V-ることができます, dan kanji bab terkait.
- Materi lain pada dashboard masih mengikuti struktur Irodori yang sudah ada di proyek.
- Kerangka simulasi mengacu pada [JFT-Basic Test Structure](https://www.jpf.go.jp/jft-basic/e/about/index.html).
- Karakter latihan pilihan ganda juga mempertimbangkan [JLPT Official Sample Questions](https://www.jlpt.jp/e/samples/forlearners.html).

Seluruh soal di aplikasi ditulis secara orisinal untuk latihan. Aplikasi ini tidak berafiliasi dengan Japan Foundation dan bukan simulasi resmi JFT-Basic atau JLPT.
