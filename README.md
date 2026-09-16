# Manabi — Belajar Nihongo

Dashboard React responsif untuk belajar bahasa Jepang dasar melalui situasi sehari-hari.

## Fitur

- 18 lesson Irodori Starter dengan `Can-do`, pola kalimat, kosakata, dan text-to-speech Jepang.
- Kuis interaktif dengan umpan balik dan pembahasan langsung.
- Simulasi ujian bertimer, navigasi soal, skor otomatis, dan target latihan.
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

- Materi mengikuti urutan topik dan tujuan pembelajaran [Irodori Starter](https://www.irodori.jpf.go.jp/en/starter/pdf.html), Japan Foundation.
- Kerangka simulasi mengacu pada [JFT-Basic Test Structure](https://www.jpf.go.jp/jft-basic/e/about/index.html).
- Karakter latihan pilihan ganda juga mempertimbangkan [JLPT Official Sample Questions](https://www.jlpt.jp/e/samples/forlearners.html).

Seluruh soal di aplikasi ditulis secara orisinal untuk latihan. Aplikasi ini tidak berafiliasi dengan Japan Foundation dan bukan simulasi resmi JFT-Basic atau JLPT.
