// app/data.ts

export type Exercise = {
  id: string;
  category: string;
  title: string;
  code: string;
  description: string;
};

export const exercises: Exercise[] = [
  // --- 1. DASAR ---
  {
    id: "1.1",
    category: "1. Dasar & Struktur",
    title: "1.1 Teks Sederhana",
    code: `<!DOCTYPE html>
<html>
<head><title>Latihan 1</title></head>
<body>
    <p>Belajar bahasa pemrograman web ternyata mudah juga</p>
</body>
</html>`,
    description: "Menampilkan teks sederhana di browser."
  },
  {
    id: "1.2",
    category: "1. Dasar & Struktur",
    title: "1.2 Warna Teks",
    code: `<!DOCTYPE html>
<html>
<head>
    <style>
        .merah { color: red; }
        .biru { color: #007BFF; }
        .emas { color: #FFD700; }
    </style>
</head>
<body>
    <h3 class="emas">Eksperimen Warna</h3>
    <p class="merah">Teks ini berwarna Merah.</p>
    <p class="biru">Teks ini berwarna Biru Tech.</p>
</body>
</html>`,
    description: "Mengubah warna font menggunakan CSS."
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
            background-image: url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80');
            background-size: cover;
            color: white;
            font-family: sans-serif;
            height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .box {
            background: rgba(0, 0, 0, 0.7);
            padding: 30px;
            border-radius: 10px;
            border: 1px solid #FFD700;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>Background Image</h1>
        <p>Tampilan full screen dengan gambar.</p>
    </div>
</body>
</html>`,
    description: "Menggunakan gambar sebagai latar belakang."
  },

  // --- 2. FORMAT TEKS ---
  {
    id: "2.1",
    category: "2. Format Teks",
    title: "2.1 Basic Formatting",
    code: `<html>
<body>
    <p><b>Bold (Tebal)</b></p>
    <p><i>Italic (Miring)</i></p>
    <p><u>Underline (Garis Bawah)</u></p>
    <p><strike>Strikethrough (Coret)</strike></p>
</body>
</html>`,
    description: "Format teks dasar."
  },
  {
    id: "2.2",
    category: "2. Format Teks",
    title: "2.2 Sup & Sub",
    code: `<html>
<body>
    <h3>Rumus Kimia & Matematika</h3>
    <p>Air: H<sub>2</sub>O (Subscript)</p>
    <p>Kuadrat: E = mc<sup>2</sup> (Superscript)</p>
</body>
</html>`,
    description: "Membuat huruf kecil di bawah (sub) atau di atas (sup)."
  },
  {
    id: "2.3",
    category: "2. Format Teks",
    title: "2.3 Preformatted",
    code: `<html>
<body>
    <h3>Tag Pre (Menjaga Spasi)</h3>
    <pre>
    Kupu-kupu terbang tinggi
        Hinggap di bunga
            Yang warna-warni
    </pre>
    <p><i>Tanpa tag pre, spasi/enter di atas akan diabaikan browser.</i></p>
</body>
</html>`,
    description: "Menampilkan teks persis sesuai format ketikan (termasuk spasi/enter)."
  },

  // --- 4. TABEL ---
  {
    id: "4.1",
    category: "4. Tabel",
    title: "4.1 Tabel Standar",
    code: `<html>
<head>
<style>table, th, td { border: 1px solid black; padding: 5px; border-collapse: collapse; }</style>
</head>
<body>
    <table>
        <tr><th>No</th><th>Nama</th></tr>
        <tr><td>1</td><td>Budi</td></tr>
        <tr><td>2</td><td>Siti</td></tr>
    </table>
</body>
</html>`,
    description: "Tabel baris dan kolom sederhana."
  },
  {
    id: "4.2",
    category: "4. Tabel Warna",
    title: "4.2 Tabel Warna",
    code: `<html>
<head>
<style>
  table { border-collapse: collapse; width: 100%; font-family: sans-serif; }
  th { background-color: #FFC107; color: black; padding: 10px; }
  td { border: 1px solid #ddd; padding: 8px; }
  tr:nth-child(even) { background-color: #f2f2f2; }
</style>
</head>
<body>
    <table>
        <tr><th>Produk</th><th>Harga</th></tr>
        <tr><td>Laptop</td><td>Rp 10jt</td></tr>
        <tr><td>Mouse</td><td>Rp 100rb</td></tr>
    </table>
</body>
</html>`,
    description: "Memberi warna pada header dan baris."
  },
  {
    id: "4.3",
    category: "4. Tabel",
    title: "4.3 Merge Cells",
    code: `<html>
<head>
<style>table, th, td { border: 1px solid black; padding: 10px; border-collapse: collapse; text-align:center; }</style>
</head>
<body>
    <h3>Penggabungan Sel</h3>
    <table>
        <tr>
            <th colspan="2">Nama Lengkap (Colspan=2)</th>
            <th>Umur</th>
        </tr>
        <tr>
            <td>Budi</td>
            <td>Santoso</td>
            <td rowspan="2">20 (Rowspan=2)</td>
        </tr>
        <tr>
            <td>Siti</td>
            <td>Aminah</td>
        </tr>
    </table>
</body>
</html>`,
    description: "Menggabungkan baris (rowspan) atau kolom (colspan)."
  },

  // --- 5. GAMBAR ---
  {
    id: "5.1",
    category: "5. Gambar",
    title: "5.1 Gambar & Folder",
    code: `<html>
<body>
    <h3>Gambar Folder Lokal</h3>
    <p>Contoh kode memanggil file "foto.jpg" di dalam folder "images":</p>
    <code>&lt;img src="images/foto.jpg" width="300"&gt;</code>
    
    <hr>
    <h3>Preview:</h3>
    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&q=80" 
         style="border-radius: 10px; border: 4px solid #FFC107;">
</body>
</html>`,
    description: "Menampilkan gambar dari folder lokal."
  },

  // --- 6. HYPERLINK (BARU) ---
  {
    id: "6.1",
    category: "6. Hyperlink",
    title: "6.1 Link Website",
    code: `<html>
<body>
    <h3>Link Eksternal</h3>
    <p>Klik link di bawah untuk membuka Google:</p>
    <a href="https://www.google.com" target="_blank" style="color: blue; font-weight: bold;">
        Buka Google (Tab Baru)
    </a>
</body>
</html>`,
    description: "Membuat link ke website lain dengan target blank."
  },
  {
    id: "6.2",
    category: "6. Hyperlink",
    title: "6.2 Link Gambar",
    code: `<html>
<body>
    <h3>Gambar sebagai Link</h3>
    <p>Klik gambar di bawah ini:</p>
    <a href="https://google.com" target="_blank">
        <img src="https://placehold.co/200x100?text=Klik+Saya" border="0">
    </a>
</body>
</html>`,
    description: "Menjadikan gambar sebagai tombol link."
  },

  // --- 7. FORM (BARU) ---
  {
    id: "7.1",
    category: "7. Form",
    title: "7.1 Form Login",
    code: `<html>
<head>
<style>
    .login-box { padding: 20px; background: #eee; border-radius: 8px; width: 250px; font-family: sans-serif;}
    input { width: 100%; padding: 8px; margin: 5px 0; box-sizing: border-box; }
    button { width: 100%; background: #007BFF; color: white; padding: 10px; border: none; cursor: pointer;}
</style>
</head>
<body>
    <div class="login-box">
        <h3>Login User</h3>
        <form>
            <label>Username:</label>
            <input type="text" placeholder="Masukkan nama...">
            
            <label>Password:</label>
            <input type="password" placeholder="*******">
            
            <button type="submit">Masuk</button>
        </form>
    </div>
</body>
</html>`,
    description: "Membuat form input text dan password."
  },
  {
    id: "7.2",
    category: "7. Form",
    title: "7.2 Form Register",
    code: `<html>
<body>
    <h3>Form Pendaftaran</h3>
    <form>
        <p>Jenis Kelamin (Radio):<br>
        <input type="radio" name="jk" value="L"> Laki-laki
        <input type="radio" name="jk" value="P"> Perempuan
        </p>
        
        <p>Hobi (Checkbox):<br>
        <input type="checkbox"> Coding
        <input type="checkbox"> Gaming
        </p>
        
        <p>Kota (Select):<br>
        <select>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Surabaya</option>
        </select>
        </p>
        
        <p>Alamat (Textarea):<br>
        <textarea rows="4" cols="30"></textarea>
        </p>
    </form>
</body>
</html>`,
    description: "Menggunakan radio button, checkbox, select option, dan textarea."
  },

  // --- 8. FRAME (BARU) ---
  {
    id: "8.1",
    category: "8. Frame",
    title: "8.1 Iframe Website",
    code: `<!DOCTYPE html>
<html>
<body>
    <h3>Embed Website (Iframe)</h3>
    <p>Menampilkan website lain di dalam kotak:</p>
    
    <iframe src="https://www.wikipedia.org" 
            width="100%" 
            height="300" 
            style="border: 2px solid #FFC107;">
    </iframe>
</body>
</html>`,
    description: "Menampilkan halaman web eksternal di dalam frame."
  },
  {
    id: "8.2",
    category: "8. Frame",
    title: "8.2 Embed Youtube",
    code: `<!DOCTYPE html>
<html>
<body>
    <h3>Embed Video Youtube</h3>
    <iframe width="100%" height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            frameborder="0" 
            allowfullscreen>
    </iframe>
</body>
</html>`,
    description: "Cara embed video Youtube ke dalam halaman HTML."
  }
];