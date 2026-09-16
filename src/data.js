export const lessons = [
  {id:1, topic:'Mulai Berbicara', jp:'おはようございます', title:'Selamat pagi!', canDo:'Memberi salam sesuai waktu dan situasi.', grammar:['おはようございます','こんにちは','こんばんは'], words:['pagi','siang','malam'], color:'#E86145'},
  {id:2, topic:'Mulai Berbicara', jp:'すみません、よくわかりません', title:'Maaf, saya kurang mengerti.', canDo:'Meminta pengulangan dan mengatakan belum paham.', grammar:['すみません','もういちど おねがいします','わかりません'], words:['maaf','sekali lagi','mengerti'], color:'#E86145'},
  {id:3, topic:'Tentang Diri', jp:'はじめまして', title:'Salam kenal.', canDo:'Memperkenalkan nama dan asal secara singkat.', grammar:['N です','N から きました','よろしく おねがいします'], words:['nama','negara','pekerjaan'], color:'#7A6FDE'},
  {id:4, topic:'Tentang Diri', jp:'東京に住んでいます', title:'Saya tinggal di Tokyo.', canDo:'Menyampaikan tempat tinggal, umur, dan kegiatan.', grammar:['N に すんでいます','N さいです','N を しています'], words:['tinggal','umur','bekerja'], color:'#7A6FDE'},
  {id:5, topic:'Makanan Favorit', jp:'うどんが好きです', title:'Saya suka udon.', canDo:'Mengatakan makanan yang disukai atau tidak disukai.', grammar:['N が すきです','N は ちょっと…','なにが すきですか'], words:['makanan','suka','kurang suka'], color:'#D8922B'},
  {id:6, topic:'Makanan Favorit', jp:'チーズバーガーください', title:'Tolong cheeseburger.', canDo:'Memesan makanan dan menyebut jumlah.', grammar:['N ください','N を ひとつ','これ／それ'], words:['menu','jumlah','pesanan'], color:'#D8922B'},
  {id:7, topic:'Rumah & Tempat Kerja', jp:'部屋が四つあります', title:'Ada empat kamar.', canDo:'Menjelaskan ruangan dan benda yang ada.', grammar:['N が あります','N が います','いくつ'], words:['ruangan','benda','jumlah'], color:'#2E8B79'},
  {id:8, topic:'Rumah & Tempat Kerja', jp:'山田さんはどこですか', title:'Yamada-san ada di mana?', canDo:'Menanyakan lokasi orang atau tempat.', grammar:['N は どこですか','ここ／そこ／あそこ','N の となり'], words:['lokasi','arah','posisi'], color:'#2E8B79'},
  {id:9, topic:'Kehidupan Sehari-hari', jp:'昼休みは12時から1時までです', title:'Istirahat dari pukul 12 sampai 1.', canDo:'Menyebut waktu dan jadwal harian.', grammar:['N から N まで','なんじ','V-ます'], words:['waktu','jadwal','istirahat'], color:'#2F74B5'},
  {id:10, topic:'Kehidupan Sehari-hari', jp:'ホチキス貸してください', title:'Tolong pinjamkan stapler.', canDo:'Meminta bantuan sederhana di tempat kerja.', grammar:['V-て ください','いいですよ','ちょっと まってください'], words:['alat kerja','meminjam','menunggu'], color:'#2F74B5'},
  {id:11, topic:'Hal yang Disukai', jp:'どんな漫画が好きですか', title:'Manga seperti apa yang Anda suka?', canDo:'Bertanya dan bercerita tentang hobi.', grammar:['どんな N','V-るのが すきです','よく／ときどき'], words:['hobi','jenis','frekuensi'], color:'#B15D8F'},
  {id:12, topic:'Hal yang Disukai', jp:'いっしょに飲みに行きませんか', title:'Mau pergi minum bersama?', canDo:'Mengajak, menerima, atau menolak ajakan.', grammar:['V-ませんか','V-ましょう','すみません、ちょっと…'], words:['ajakan','janji','waktu'], color:'#B15D8F'},
  {id:13, topic:'Berkeliling Kota', jp:'このバスは空港に行きますか', title:'Apakah bus ini ke bandara?', canDo:'Menanyakan kendaraan dan tujuan.', grammar:['この N','N に いきますか','どの バス'], words:['kendaraan','tujuan','halte'], color:'#397E8C'},
  {id:14, topic:'Berkeliling Kota', jp:'大きな建物ですね', title:'Bangunannya besar, ya.', canDo:'Menjelaskan ciri tempat sebagai petunjuk.', grammar:['イA-い N','ナA-な N','N ですね'], words:['bangunan','ciri','petunjuk'], color:'#397E8C'},
  {id:15, topic:'Di Toko', jp:'電池がほしいんですが', title:'Saya membutuhkan baterai.', canDo:'Menyampaikan barang yang dicari.', grammar:['N が ほしいんですが','N は ありますか','こちらです'], words:['barang','ukuran','tempat'], color:'#C85D69'},
  {id:16, topic:'Di Toko', jp:'これ、いくらですか', title:'Berapa harga ini?', canDo:'Menanyakan harga dan melakukan pembayaran.', grammar:['いくらですか','N 円です','これを ください'], words:['harga','uang','pembayaran'], color:'#C85D69'},
  {id:17, topic:'Hari Libur', jp:'映画を見に行きました', title:'Saya pergi menonton film.', canDo:'Menceritakan kegiatan lampau.', grammar:['V-ました','どこにも V-ませんでした','どうでしたか'], words:['liburan','kegiatan','kesan'], color:'#8A7147'},
  {id:18, topic:'Hari Libur', jp:'温泉に入りたいです', title:'Saya ingin berendam di onsen.', canDo:'Menyampaikan keinginan dan rencana.', grammar:['V-たいです','N に いきたいです','いつか'], words:['rencana','keinginan','wisata'], color:'#8A7147'}
]

export const questions = [
  {section:'Kosakata', q:'「郵便局（ゆうびんきょく）」 berarti…', options:['Kantor pos','Rumah sakit','Perpustakaan','Stasiun'], answer:0, why:'郵便局 adalah kantor pos.'},
  {section:'Kosakata', q:'Cara baca 「時間」 yang benar adalah…', options:['じかん','じけん','しかん','しけん'], answer:0, why:'時間 dibaca じかん dan berarti waktu.'},
  {section:'Kosakata', q:'Lawan kata 「大きい」 adalah…', options:['ちいさい','あたらしい','たかい','ながい'], answer:0, why:'大きい = besar, sedangkan 小さい（ちいさい）= kecil.'},
  {section:'Tata bahasa', q:'Lengkapi: わたしは ジャカルタ（　）すんでいます。', options:['に','を','が','で'], answer:0, why:'Partikel に menandai tempat tinggal dengan 住んでいます.'},
  {section:'Tata bahasa', q:'Anda ingin meminjam pulpen. Ungkapan paling sesuai adalah…', options:['ペンを貸してください。','ペンを見てください。','ペンを食べてください。','ペンを行ってください。'], answer:0, why:'貸してください berarti “tolong pinjamkan”.'},
  {section:'Tata bahasa', q:'Lengkapi: コーヒー（　）ください。', options:['を','で','へ','と'], answer:0, why:'を menandai objek yang dipesan/diminta.'},
  {section:'Percakapan', q:'A: はじめまして。リナです。 B: ________。', options:['よろしくおねがいします','いただきます','いってきます','ごちそうさま'], answer:0, why:'よろしくおねがいします lazim digunakan saat perkenalan.'},
  {section:'Percakapan', q:'Kasir: いらっしゃいませ。 Anda ingin menanyakan harga. Apa yang dikatakan?', options:['これはいくらですか。','これはどこですか。','これはだれですか。','これはいつですか。'], answer:0, why:'いくら menanyakan harga.'},
  {section:'Percakapan', q:'Teman mengajak: いっしょに映画を見ませんか。 Anda setuju.', options:['いいですね。行きましょう。','すみませんでした。','わかりません。','映画ではありません。'], answer:0, why:'いいですね。行きましょう menerima ajakan secara alami.'},
  {section:'Membaca', q:'Papan: 「営業時間 9:00–18:00／水曜日 休み」. Kapan toko tutup?', options:['Hari Rabu','Hari Senin','Pukul 09.00','Setiap malam'], answer:0, why:'水曜日 休み berarti tutup pada hari Rabu.'},
  {section:'Membaca', q:'Pesan: 「明日の会議は10時からです。9時50分に来てください。」 Kapan harus datang?', options:['09.50','10.00','10.50','09.00'], answer:0, why:'9時50分に来てください berarti datang pukul 09.50.'},
  {section:'Membaca', q:'Menu: ラーメン ¥750、うどん ¥600、カレー ¥800. Mana yang paling murah?', options:['うどん','ラーメン','カレー','Semuanya sama'], answer:0, why:'Udon ¥600 adalah harga terendah.'},
  {section:'Pemahaman', q:'Pengumuman: 「電車は事故で20分おくれています。」 Apa yang terjadi?', options:['Kereta terlambat 20 menit','Kereta tiba 20 menit lebih awal','Kereta dibatalkan besok','Stasiun tutup'], answer:0, why:'おくれています berarti sedang terlambat.'},
  {section:'Pemahaman', q:'「右に曲がって、二つ目の信号を左です。」 Setelah belok kanan, apa berikutnya?', options:['Belok kiri di lampu lalu lintas kedua','Berhenti di lampu pertama','Kembali ke kanan','Naik bus kedua'], answer:0, why:'二つ目の信号を左 = belok kiri pada lampu lalu lintas kedua.'},
  {section:'Pemahaman', q:'「今日は雨ですから、かさを持って行ってください。」 Apa yang perlu dibawa?', options:['Payung','Topi','Sepatu','Tiket'], answer:0, why:'かさ berarti payung.'}
]

export const sources = [
  {name:'Irodori Starter — Japan Foundation', note:'Urutan topik dan tujuan materi utama', url:'https://www.irodori.jpf.go.jp/en/starter/pdf.html'},
  {name:'JFT-Basic — Test Structure', note:'Kerangka empat bagian simulasi', url:'https://www.jpf.go.jp/jft-basic/e/about/index.html'},
  {name:'JLPT — Official Sample Questions', note:'Rujukan karakter latihan pilihan ganda', url:'https://www.jlpt.jp/e/samples/forlearners.html'}
]
