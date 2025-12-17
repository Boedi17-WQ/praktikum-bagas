// app/data.ts

export type Exercise = {
  id: string;
  category: string;
  title: string;
  code: string;
  description: string;
};

export const exercises: Exercise[] = [
  // =========================================
  // MODUL 1: DASAR & STRUKTUR
  // =========================================
  {
    id: "1.1",
    category: "1. Dasar & Struktur",
    title: "1.1 Teks Sederhana",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Latihan 1.1</title>
</head>
<body>
    <p>Belajar bahasa pemrograman web ternyata mudah juga.</p>
    <p>Halo, nama saya Bagas Pambudi!</p>
</body>
</html>`,
    description: "Latihan dasar menampilkan teks menggunakan tag paragraf."
  },
  {
    id: "1.2",
    category: "1. Dasar & Struktur",
    title: "1.2 Warna Teks",
    code: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Menggunakan CSS untuk warna */
        .merah { color: red; }
        .biru { color: blue; }
        .kuning { color: #FFD700; background-color: #333; padding: 5px; }
    </style>
</head>
<body>
    <p class="merah">Kalimat ini berwarna Merah.</p>
    <p class="biru">Kalimat ini berwarna Biru.</p>
    <p class="kuning">Kalimat ini berwarna Emas dengan latar gelap.</p>
</body>
</html>`,
    description: "Mengubah warna teks (Foreground Color) menggunakan CSS."
  },
  {
    id: "1.3",
    category: "1. Dasar & Struktur",
    title: "1.3 Teks & Background",
    code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: #0f172a; /* Latar belakang halaman gelap */
            color: white; /* Teks putih */
            font-family: sans-serif;
        }
        .kotak {
            background-color: #FFC107; /* Latar oranye/kuning */
            color: black;
            padding: 20px;
            border-radius: 8px;
            margin: 20px;
        }
    </style>
</head>
<body>
    <h2>Halaman dengan Background Warna</h2>
    <div class="kotak">
        <p>Ini adalah teks hitam di dalam kotak berwarna kuning.</p>
    </div>
</body>
</html>`,
    description: "Kombinasi warna background halaman dan elemen div."
  },
  {
    id: "1.4",
    category: "1. Dasar & Struktur",
    title: "1.4 Background Gambar",
    code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            /* Background Gambar Full Screen */
            background-image: url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            color: white;
            font-family: monospace;
            height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h1 {
            background: rgba(0, 0, 0, 0.6);
            padding: 20px 40px;
            border: 2px solid #FFD700;
            border-radius: 10px;
            text-shadow: 2px 2px 4px #000;
        }
    </style>
</head>
<body>
    <h1>Cyber Tech Background</h1>
</body>
</html>`,
    description: "Menggunakan gambar sebagai latar belakang halaman (Background Image)."
  },

  // =========================================
  // MODUL 2: FORMAT TEKS
  // =========================================
  {
    id: "2.1",
    category: "2. Format Teks",
    title: "2.1 Line Break",
    code: `<!DOCTYPE html>
<html>
<body>
    <h3>Tanpa Line Break (BR):</h3>
    <p>
        Baris satu
        Baris dua (Browser mengabaikan enter di kodingan)
    </p>

    <hr>

    <h3>Dengan Line Break (BR):</h3>
    <p>
        Baris satu<br>
        Baris dua<br>
        Baris tiga
    </p>
</body>
</html>`,
    description: "Tag <br> digunakan untuk memutus baris (ganti baris) di dalam paragraf."
  },
  {
    id: "2.2",
    category: "2. Format Teks",
    title: "2.2 Paragraf",
    code: `<!DOCTYPE html>
<html>
<body>
    <p>Ini adalah paragraf pertama. Tag &lt;p&gt; otomatis memberikan jarak (margin) di atas dan di bawah teks.</p>
    
    <p>Ini adalah paragraf kedua. Bandingkan jaraknya dengan baris biasa.</p>
    
    <p>Ini adalah paragraf ketiga.</p>
</body>
</html>`,
    description: "Tag <p> digunakan untuk mendefinisikan blok teks sebagai paragraf."
  },
  {
    id: "2.3",
    category: "2. Format Teks",
    title: "2.3 Align Paragraf",
    code: `<!DOCTYPE html>
<html>
<head>
    <style>
        .kiri { text-align: left; }
        .tengah { text-align: center; }
        .kanan { text-align: right; }
        .justify { text-align: justify; }
    </style>
</head>
<body>
    <h3 class="kiri">Rata Kiri (Left)</h3>
    <p class="kiri">Teks ini menempel ke kiri standar.</p>

    <h3 class="tengah">Rata Tengah (Center)</h3>
    <p class="tengah">Teks ini berada di tengah halaman.</p>

    <h3 class="kanan">Rata Kanan (Right)</h3>
    <p class="kanan">Teks ini menempel ke kanan halaman.</p>
</body>
</html>`,
    description: "Mengatur perataan teks (Alignment) menggunakan CSS text-align."
  },
  {
    id: "2.4",
    category: "2. Format Teks",
    title: "2.4 Heading (H1-H6)",
    code: `<!DOCTYPE html>
<html>
<body>
    <h1>Heading 1 - Paling Besar</h1>
    <h2>Heading 2 - Sub Judul</h2>
    <h3>Heading 3 - Sub Bab</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6 - Paling Kecil</h6>
</body>
</html>`,
    description: "Tingkatan judul dokumen dari H1 (utama) sampai H6 (terkecil)."
  },
  {
    id: "2.5",
    category: "2. Format Teks",
    title: "2.5 Bold, Italic, Underline",
    code: `<!DOCTYPE html>
<html>
<body>
    <p>Teks Normal</p>
    <p><b>Bold: Teks Tebal</b></p>
    <p><i>Italic: Teks Miring</i></p>
    <p><u>Underline: Garis Bawah</u></p>
    
    <p><b><i><u>Kombinasi Ketiganya</u></i></b></p>
</body>
</html>`,
    description: "Tag formatting dasar: <b> (Bold), <i> (Italic), dan <u> (Underline)."
  },
  {
    id: "2.6",
    category: "2. Format Teks",
    title: "2.6 Preformatted",
    code: `<!DOCTYPE html>
<html>
<body>
    <h3>Contoh Menggunakan Tag PRE</h3>
    <pre>
    Kodingan C++:
    
    int main() {
        cout << "Hello World";
        return 0;
    }
    </pre>
    
    <p><i>Tanpa tag &lt;pre&gt;, spasi dan enter di atas akan hilang.</i></p>
</body>
</html>`,
    description: "Tag <pre> menampilkan teks dengan format spasi dan baris tetap (Monospace)."
  },
  {
    id: "2.7",
    category: "2. Format Teks",
    title: "2.7 Center",
    code: `<!DOCTYPE html>
<html>
<body>
    <center>
        <h3>Judul di Tengah</h3>
        <p>Semua elemen di dalam tag center akan berada di tengah.</p>
        <button>Tombol Tengah</button>
    </center>
    
    <hr>
    
    <div style="text-align: center; margin-top: 20px;">
        <p style="color: blue;">Ini menggunakan CSS modern (text-align: center)</p>
    </div>
</body>
</html>`,
    description: "Membuat elemen rata tengah menggunakan tag <center> (Klasik) atau CSS."
  },
  {
    id: "2.8",
    category: "2. Format Teks",
    title: "2.8 Basefont (Simulasi)",
    code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: "Courier New", monospace; /* Jenis Font Dasar */
            font-size: 18px; /* Ukuran Font Dasar */
            color: #333;
        }
    </style>
</head>
<body>
    <h3>Simulasi Basefont</h3>
    <p>Karena kita mengatur style di body, semua teks di halaman ini otomatis mengikuti font Courier New ukuran 18px.</p>
    <p>Ini menggantikan fungsi tag &lt;basefont&gt; jaman dulu.</p>
</body>
</html>`,
    description: "Mengatur font dasar halaman. (Note: Tag asli <basefont> sudah dihapus dari browser modern)."
  },
  {
    id: "2.9",
    category: "2. Format Teks",
    title: "2.9 Font Attribute",
    code: `<!DOCTYPE html>
<html>
<body>
    <h3>Atribut Font Custom</h3>
    
    <p style="font-family: Arial; font-size: 24px;">
        Ini font Arial ukuran 24px
    </p>
    
    <p style="font-family: 'Times New Roman'; color: red;">
        Ini font Times New Roman warna Merah
    </p>
    
    <p style="font-family: Verdana; font-size: 12px; color: blue;">
        Ini font Verdana kecil warna Biru
    </p>
</body>
</html>`,
    description: "Mengubah jenis font (Face), ukuran (Size), dan warna (Color) secara spesifik."
  },
  {
    id: "2.10",
    category: "2. Format Teks",
    title: "2.10 Horizontal Rule",
    code: `<!DOCTYPE html>
<html>
<body>
    <h3>Bab 1: Pendahuluan</h3>
    <p>Ini adalah isi bab satu.</p>
    
    <hr>
    
    <h3>Bab 2: Pembahasan</h3>
    <p>Garis di atas adalah tag HR default.</p>
    
    <hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">
    
    <p>Garis di atas adalah HR dengan style CSS custom.</p>
    
    <hr style="border-top: 5px dashed blue;">
</body>
</html>`,
    description: "Tag <hr> digunakan untuk membuat garis horizontal pemisah konten."
  }
];