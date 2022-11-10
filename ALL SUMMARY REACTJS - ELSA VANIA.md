# All Summary "How to be an Ideal Top Search React JS Front-End Engineer" 
# By Elsa Vania - ReactJS B

## 3.Version Control And Branch Git

__> Version Control and Branch Git__
- Versioning merupakan kegiatan mengatur versi dari source code program. 
- Version control sistem merupakan suatu sistem yang merekam perubahan-perubahan. Version Control System terdiri dari :
    * Single User
    * Centralized
    * Distributed 
-  Adapun salah satu version control system populer yang bisa digunakan untuk pengembangan program atau software bersama sama (terdistribusi) adalah GIT. GIT akan melacak seluruh perubahan yang terjadi.


__> Set Up, Seving Changes, Undo, Syncing, Branch, dan Pull Reguest Git Project__
- Membuat repository di Github
- Set Up project local dengan :
  1. Melakukan config :
    git config --global user.name "username"
    git config --global user.email "email@blabala.com"
  2. Melakukan inisiasi  dengan git init
- Perubahan dalam suatu program dengan 
  1. Menambahkan file dengan git add nama file atau git add . untuk semua file
  2. Menyimpan perubahan dengan git commit -m "isi commit"
- Mengundo perubahan dengan git resert --soft atau --hard
- Melakukan sinkronisasi dengan :
  1. git remote add origin https://github.com/uname/blabala.git
  2. git push origin main untuk mengirimkan semua perubahan
- Membuat branch baru dan penggabungan branch dengan : 
  1. Branch baru : git checkout -b namabranch main (main dalah branch default)
  2. Pindah branch : git checkout  namabranch
  3. Melihat ada di branch mana : git branch
  4. Menggabungkan branch : git merge namabranch
- Pull Request 
  Merupakan permintaan untuk menggabungkan merge baru yang memiliki perubahan. 


__> Optimize Workflow Collaboration__
* Adapun beberap hal penting yang dilakukan agar alur saat berkolaborasi dalam mendevelop suatu program adalah dengan cara sebagai berikut :
- Membiarkan branch master atau main agar tidak dilakukan perubahan. Untuk suatu perubahan, lebih baik membuat branch baru seperti branch development.
- Hindari perubahan di branch development, lebih baik membuat branch baru seperti branch feature untuk mengembangkan fitur suatu program 
-  Lakukan penerapan fitur dengan merge  branch development dan branch fitur
-  Bila sudah selesai, merge branch development ke dalam branch master atau main.

>                                                           CHAPTER 3



## 4. Figma

__> Perkenalan Figma__
- Figma merupakan editor grafis vector dan tools prototyping yang memiliki basis utama berupa website, dan beberapa tambahan fitur yang ada di versi Desktop baik Mac maupun Windows.
- Adapun kelebihan Figma adalah :
    1. Gratis dengan batasan 2 pengguna dan 3 project per akun.
    2. Bekerja di OS Mac maupun PC
    3. Bisa berkolaborasi secara real time 
    4. Bisa import sketch files tapi tidak bisa export di file sketch.
    5. Desain sistem maupun desain tim yang baik
    6. Prototypes dengan kualitas yang tinggi 
    7. Bisa terintegrasi untuk Developer Mac dan PC
- Kekurangan Figma :
    Harus bekerja secara online (terhubung koneksi internet)


__> Macam - macam Shortcuts maupun Set Up dalam Penggunaan Figma__ 
- Membuat frame : F 
- Memunculkan Grid : Mengklik layout grid dan tentukan grid berdasarkan kolom atau baris pada menu/panel  Design di sebelah kanan 
- Membuat kotak : R
- Memindahkan object : V
- Posisi tata letak object : Mengisi  nilai X dan Y pada menu/pane Design di sebelah kanan 
- Menambahkan Color Styles (menyimpan warna) :
        - Tetap di menu/panel design, klik Fill
        - Pilih warna
        - Pilih qardable dot (menu 4 titik) untuk melihat Color Styles
        - Klik tombol (+)
        - Beri nama warna yang dipilih
        - Klik tombol Create Styles
- Menyembunyikan Grid : Shift-Control-4
- Menambahkan Text : T
- Mengatur Text : klik Text pada menu/panel design di sebelah kanan (atur font, ukuran, spasi, )
- Memilih object atau tools : Shift
- Mengcopy object : klik Alt dan geser dengan mouse
- Melakukan auto layout object : Shift-A
- Memilih object ellipse : O
- Melaukan Goroup : Ctrl-G
- Membuat Component :Ctrl-Alt-K
- Melakukan frame selection : Ctrl-Alt-G
- Menempatkan Gambar kedalam Frame : Shift-Ctrl-K
- Meletakkan gambar di belakang elemet : Shift-Ctrl-[


__> Melakukan Prototypes di Figma__
-  Pada menu/panel design, disebelah kanannya ada panel prototype, klik panel tersebut
-  Pilih object atau tombol yang dipilih, kemudian tarik dan arahkan ke object yang ingin ditampilkan setelahnya
-  Atur Interactions seperti on-click, hover dan lain sebagainya 
-  Lakukan juga pemilihan frame (klik F) untuk dilakukan Vertical Scrolling atau Horizontal Scrolling

>                                                           CHAPTER 4



## 5. HTML 

__> Front-End dan HTML__
- Front-End adalah sebuah bagian dari website yang membuat tampilan yang menarik kepasa user yang biasanya tersusun dari : HTML, Java Script, dan CSS
- HTML adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web.
- HTML adalah kependekan dari Hypertext Markup Language
- HTML memiliki kegunaan yaitu : 
    1. Membuat struktur halaman website
    2. Mengatur tampilan dan isi dari halaman website
    3. Membuat tabel dengan tag HTML table
    4. Membuat Form HTML
    5. Membuat gambar dengan Canvas
    6. Mempublikasikan halaman website secara online
- HTML editors : notepad, sublime, notepad++, maupun visual studio code (vscode)


__> Macam - macam Tag HTML dan Fungsinya__
Note : Untuk setiap tag HTML diberi penutup dengan menambahkan / ke dalam tagnya . Penutup ini nantinya diletakkan di akhir element/tag html. 
- < !DOCTYPE html > : digunakan untuk mendefinisikan dokumen sebagai HTML5
- < html > : merupakan elemen root dari halaman HTML
- < head > : berisi informasi meta (deskripsi/informasi sebuah konten yang akan ditampilkan dalam hasil pencarian)  dalam dokumen
- < title > : berisi judul halaman
- < body > : berisi konten halaman yang terlihat
- < h1 > : heading 1
- < h2 > : heading 2, untuk heading bisa menyesuiakan hingga hieading berapa, tinggal ganti angka untuk heading ke berapa
- < p>  : paragraf
- < strong > : menebalkan text
- < em > : membuat text menjadi italic (miring)
- < s > : membuat text dengan garis tercoret
- < br/ > : membuat baris baru (line break)
- < div > : mengelompokkan berbagai macam elemen atau tag HTML dalam satu group
- < a href="http://blalalala.com/" > : merupakan tag untuk menampilkan link/redirect link dalam HTML 
- < a href="http://blalalala.com/" target="_blank" > : merupakan tag link untuk membuka tab baru
- < img src"blaba.png" > : menambahkan gambar di HTML
- < ol > : ordered list adalah list yang berurut
- < ol type="..." > : untuk mengganti tipe urutan dari Ordered List seperti menggunakan angka romawi atu huruf kapital
- < ul > : unordered list atau list yang tak terurut
- < li > : menampilkan list item
- < table > : membuat table di HTML
- < tr > : deklarasi setiap baris
- < td > : deklarasi setiap kolom
- < th > :deklarasi kolom di tabel header


__> Membuat Form dalam HTML__
Note : untuk setiap inputan memiliki :
    1. Atribut name : Sebagai identitas atau nama suatu inputan
    2. Atribut value : Sebagai nilai yang dikirimkan ke sisi server saat inputan tersebut dipilih
- < form > : membuat form dalam html
- < fieldset > :mengelompokkan form dalam satu grup
- < label > : memberikan label dalam inputan yang sudah diberi id 
- < input type="text" name="" > : inputan text
- < input type="radio" name="" value="" > : inputan radio button
- < select name="" > : inputan select yang berisi banyak pilihan
- < option value="" > : opsi atau isi dari suatu inputan select
- < input type="checkbox" name="" value="" > : inputan checkbox
- < textarea name="" cols="" rows="" > : inputan yan menampung banyak baris kata dengan lebar kata ditentukan dengan cols dan rows untuk banyak baris kata
- < input type="submit" value="" > : inputan yang digunakan untuk mensubmit seluruh nilai yang diinputkan dalam suatu form. Inputan ini juga memiliki value yang bisa diproses di sisi server nantinya.
- action="blalala.html" : atribut action yang nantinya digunakan sebagai penentu tujuan dari data yang diinputkan di suatu form yang  sudah di submit

>                                                           CHAPTER 5



## 6. CSS

__> Pengertian dan Penambahan File CSS__
- CSS adalah kependekan dari Casecading Style Sheet dimana memiliki fungsi seperti :
  1. Menghias halaman web (color, size, font, background, dan lain sebagainya)
  2. Mengatur posisi pada halaman web (float, align, display,position, dan lain sebagainya)
- Adapun cara menambahkan file CSS terdapat tiga cara yaitu :
    1. External CSS : menyisipkan syntax ```<link rel="stylesheet" href="namafilecss.css" >``` ke dalam tag ``` <head>```.
    2. Internal CSS : menyisipkan syntax css ke dalam elemen ```<style>``` , ```<head>``` , dan ```<body>``` di HTML.
    3. Inline CSS : menyisipkan syntax ke dalam elemen tunggal di html seperti ke dalam tag ```<h1>``` dan di prioritaskan untuk menerapkan style yang unik saja.
   

__> Syntax CSS, CSS Selector dan Grouping__
- Syntax CSS terdiri dari Selector serta Declaration yang berisi property dan value. Selector adalah elemen HTML yang dipilih untuk diberikan hiasan dari file CSS. Untuk property diibaratkan elemen hiasan yang contohnya adalah color, font-size, background, dan lain sebagainya. Sedangkan value adalah nilai yang diberikan terhadap property seperti value warna adalah warna biru (blue) maupun value dari font-size adalah 15px.
- CSS Selector merupakan pola yang ingin digunakan untuk memilih element yang ingin di styling. Ada 2 contoh CSS selector yaitu :
    1. ID (#)
        * Setiap elemen HTML hanya memiliki satu tag Id css 
        * Penamaan ID harus berbeda dalam satu halaman
        * Tidak bisa dipakai berulang - ulang
        * Contoh : 
            - HTML: ``` <div id="content"> Ini Content </div>```
            - CSS: ``` #content {
                        font-size: 12px;
                        font-family: "Helvetica Neue";
                        margin: 10px;
                    }```

    2. Class (.)
        * Setiap elemen HTML boleh memiliki lebih dari satu class css yang berbeda - beda
        * Bisa dipakai berulang - ulang dalam satu halaman
        * Contoh : 
            - HTML: ``` <div class="content"> Ini Content Class </div>```
            - CSS: ``` .content {
                        font-size: 20px;
                        font-family: 'Muli', sans-serif;
                        margin: 10px;
                    }```
- CSS Grouping merupakan pengelompokan selector berupa elemen HTML yang akan diberi CSS:
1. Contoh :
    * HTML: ``` <h1> Ini Heading 1 </h1>```
    * ``` <h2> Ini Heading 2 </h2>```
    * CSS: ``` h1,h2 {
        color: #f47523;
        font-family: "Helvetica Neue";
        }```


__> CSS Font, Margin-Padding, Background, Link, Transition, Display dan Table__
- CSS Font dimana memiliki beberapa property diantaranya adalah :
    1. font : menetapkan semua properti font dalam satu deklarasi
    2. font-family : menentukan kelompok font teks
    3. font-size : menentukan ukuran font teks
    4. font-weight : menentukan ketebala untuk font teks
    5. font-style : menentukan font teks menjadi miring
- CSS Margin digunakan untuk mengatur jarak elemen HTML dari luar. Sedangkan CSS Padding digunakan untuk mengatur jarak elemen HTML dari dalam. Penulisan value di properti margin atau padding ada 4 cara yaitu :
    1. 4 deret value (5px, 10px, 15px, 20px) yang memiliki urutan penulisan margin dari tepi atas 5px, tepi kanan 10px, tepi bawah 15px, dan tepi kiri 20px
    2. 3 deret value (15px, 20px, 25px) yang memiliki urutan penulisan margin dari tepi atas 15px, tepi kanan dan kiri dengan value yang sama 20px, dan tepi bawah 25px
    3. 2 deret value (25px, 20px) yang memiliki urutan penulisan margin dari tepi atas dan bawah dengan value yang sama yaitu 25px dan tepi kanan dan kiri dengan value yang sama yaitu 20px
    4. 1 value (30px) yang memiliki penulisan margin untuk setiap tepi atas bawah kanan kiri memiliki ukuran yang sama yaitu 30px
- CSS Background dimana memiliki beberapa property diantaranya adalah :
    1. background-color : menetapkan warna background pada suatu elemen 
    2. background-image : menentukan gambar background pada suatu elemen
    3. background-repeat : menentukan gambar background untuk di ulang
    4. background-size : menentukan ukuran gambar untuk background  
    5. background-position : mengatur posisi awal gambar background
- CSS Link dimana memiliki beberapa property diantaranya adalah :
    1. :hover : kondisi style saat mouse berada di atas elemen
    2. :active : kondisi style saat link "a" ditekan
    3. :visited : kondisi style saat link "a" telah di klik / dikunjungi
- CSS Transisi dapat digunakan untuk menambahkan durasi transisi di suatu elemen HTML dengan contoh :
    1. ease : mengatur kecepatan awal akhir transisi pelan
    2. linear : kecepatan awal akhir transisi sama
    3. ease-in : kecepatan permulaan yang pelan
    4. ease-out : kecepatan efek transisi dengan akhir yang pelan
    5. ease-in-out : kecepatan efek transisi dengan akhir dan awal pelan
- CSS Display untuk mengatur tampilan suatu elemen dimana memiliki beberapa property diantaranya adalah :
    1. block : dimulai pada baris baru dari kiri ke kanan
    2. inline-block : membutuhkan lebar sesuai yang diperlukan
    3. none : menyembunyikan elemen untuk tidak ditampilkan
- CSS Table untuk membuat style di elemen table dimana memiliki beberapa property diantaranya adalah :
    1. border : menambahkan border pada table, th, dan td
    2. border-collapse : membuat border menjadi single border
    3. :nth-child(even) : membuat background stripe

>                                                           CHAPTER 6



## 7. Bootstrap 

__> Pengertian dan Penambahan File CSS__
- Front End Framework adalah sekumpulan aturan kode yang bisa digunakan untuk mempermudah membuat suatu tampilan website. Adapun beberapa contoh framework dalam front end website adalah Bootstrap, Semantic UI, Motion UI, dan Material UI
- Framework yang biasanya umum digunakan adalah Bootstrap. 
- Framework bootstrap memiliki kelebihan dimana framework ini gratis, mendukung responsivitas suatu website, cepat, dan mudah dipelajari.
   

__> Macam - Macam Class dalam Bootstrap__
- Ada beberapa class pada bootstrap diantaranya adalah :
  * Container : container, container-fluid
        - Ada 2 macam class container yaitu container dan container fluid.  Untuk class container digunakan untuk memberi jarak dari sisi kiri dan kanan agar elemen HTML memenuhi full seluruh halaman. Sedangkan class container-fluid digunakan untuk menampung elemen HTML lainnya dari seluruh sisi layar.
  * Row : row
        - Setiap row terdiri dari kumpulan kolom. 
  * Column : col-md, col-lg, col-sm
        - Setiap class column dibagi dalam 12 grid.
        - md, lg, sm adalah breakpoints saat layar dibuka. 
            -md memiliki dimensi layar >= 768px
            -lg memiliki dimensi layar >= 992px
            -sm memiliki dimensi layar >= 576px


__> Komponen dalam Bootstrap__
- Header : bisa menggunakan container fluid untuk mengisi seluruh ruang. Bagian menu bisa dibagi dengan class column.
- Container : untuk memberi isi/konten dalam suatu website yang bertujuan memberi jarak tepi kanan dan kiri layar. Setiap konten bisa dibagi beberapa row.
- Footer : disusun melalu beberapa class column yang menyesuaikan ukuran.

>                                                           CHAPTER 7



## 8. JavaScript Refreshment

__> Pengertian JavaScript, Value, Variables, dan Destructing__
*JAVASCRIPT*
- Javascript adalah bahasa pemrograman yang  High-level (maksudnya bahasa pemrograman yang makin dimengerti manusia),  Scripting (untuk penetrasi halaman website),  Untyped(tidak berpengaruh terhadap tipe data), dan  interpreted (dapat dijalankan selama memiliki web browser, bahasa flexible, mudah diuji)

- Javascript memiliki beberapa framework atau library seperti  svelte, bootstrap, vue, react, dan lain - lain. Dengan banyaknya library ini, membuat bahasa Javascript menjadi bahasa yang mudah dipelajari sulit untuk dikuasai (karena banyak library).

*VALUE*
- Declaration merupakan proses pembuatan variabel untuk menyimpan data.
* var jarang, bisa dideklarasi ulang, bisa reasignment
* let membutuhkan nilai yang dapat diubah, bisa reasignment
* consnt saat membutuhkan nilai yang tidak bisa di reasign
* reasignment : memberi nilai baru ke variabel tersebut
- scouping : menentukan dimana variabel, fungsi, dan  objek diatur dan dapat diakses dalam kode kita. ruang lingkup varibel dikendalikan oleh lokasi deklarasi  variabel.
    -Global : setiap kondisi, variabel dalam function. atau di dalam block
    -Function : dalam function
    -Block : berkaitan dengan kurung awal, yang bisa di akses diluar 
    block scope adalah variable varabel var saja
- hoisting : membuat beberapa jenis variabel atau fungsi dapat diaksess / digunakan dalam kode sebelum dideklarasikan. contoh nya adalah var dan function.
- var bisa diberikan nilai terlebih dahulu variabelnya, baru dinisialisasi
-  bisa dipanggil terlebih dahulu functionnya baru dibuat functionnya
- let dan const tidak hoisted (tidak bisa digunakan bahkan sebelum deklarasi terjadi)

*VARIABLE*
- Javascript memiliki dua kategori tipe data :
    * Primitive :  unit pemrosesan terkecil dan elemen sederhana yang tersedia dalam bahasa pemrograman meneruskan nilai string, boolean, number, bigint, undifined, null, symbol
    * Objects :  unit yang menimpan properti dan fungsi (method)  disebut sebagai collection atau reference type object, array, function, date, set, map
- Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai  primitif dalam javascript diteruskan oleh nilai
- Saat meneruskan references, maka akan memberikan references  yang sama (sedikit kurang direkomendasikan)

*DESTRUCTING*
- Destructuring adalah ekspresi dari JavaScript yang memungkinkan  untuk menyalin nilai dari array, atau properti dari object,  ke dalam variabel yang berbeda. Saat memberi nilai terhadap variabel, kita harus mendeklarasikan  variabel tersebut terlebih dahulu.
- Array : 
    * gaada error kalo ga keambil semua, diambil sesuai urutan
    * menggunakan const ketika data tersebut kosong/undefined tidak akan terjadi error
- Object :
    * dapat menyalin nilai properti object ke dalam variabel
- Spread Syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam daftar.
    * Digambarkan dengan ... (titik tiga)
    * Spread syntax digunakan untuk menyalin salah satu  nilai variabel saja
    * Bisa menyalin isi 2 array e dalam 1 variabel
    * Bila dalam suatu object, saat dilakukan penyalinan , n object tersebut memiliki nilai yang sama, maka akan terjadi suatu irisan (output hanya 1 nilai yang sama tersebut)


__> Penerapan Method, Control-flow, Function dan Class__
*METHOD*
- Method adalah sebuah fungsi yang terkait dengan object , membuat programnya se-sederhana mungkin sesuai kegunaa masing - masing.  Dengan kata lain, method adalah sebuah shortcut untuk  mempersingkat suatu baris kode. 
- Concat :
    - Menggabungkan dua atau lebih array dan mengembalikan
    salinan array yang digabungkan
- Map :
    - Membuat array baru dengan hasil memanggil fungsi untuk
    setiap elemen array. - Melooping sebuah array dan memiliki output sebuah array. 
- Foreach :
    - Memanggil fungsi untuk setiap elemen array
    - Perbedaan dengan map adalah di dalam Foreach
    dilakukan looping yang nantinya di dalam loop tersebut
    dilakukan operasi di dalamnya atau 
    melanjutkan fungsi di dalamnya
- Slice :
    - Memlih bagian dari array dan mengembalikan array baru
    - Contoh penerapan slice : Slice(2), melakukan iterasi
    mulai dari indeks kedua di array hingga jumlah akhir elemen
    dalam array tersebut
- Filter : 
    - Membuat array baru dengan setiap elemen dalam array yang 
    lolos seleksi
- Reduce : 
    - Melakukan operasi pada setiap elemen array menjadi
    nilai tunggal (dari kiri ke kanan)

*CONTROL_FLOW*
- Normal Flow adalah pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan
- Control Flow adalah mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita. Dibutuhkan pengulangan (loop) seperti For while, do while dan perkondisian(ifelse) seperti If Else, Switch, Block, Try Catch Break, Continue, Throw
- Try Catch :
    - Try bertugas mengeksekusi statement di 
    dalamnya 
    - Catch bertugas menangkap error yang terjadi 
    pada statement di dalam Try
- Throw :
    - Terjadi di dalam block try, bertugas melemparkan error sesuai
    kondisi yang diinginkan
    - Lalu error akan ditangkap oleh catch

*FUNCTION*
- Function di JavaScript adalah sebuah objek. Karena function memiliki properti dan juga method. Function digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali.
- Komponen function terdiri dari :
    * Nama Function
    * Parameter
    * Area / scope fungsi
        Area / scope fungsi yang didalamnya diapit tanda
        {} dinamakan block
    * Pemanggilan function
        Dengan memanggil nama function, lanjut panggil argumen
        yang berisi parameter di dalamnya
- Arrow function memiliki simbol "=>"

*CLASS*
- Class adalah prototype dari suatu object yang akan dibuat
- Setiap penulisanclass terdiri dari :
    * Nama class (tanpa diikuti parameter)
    * Constructor
        Merupakan method di dalam class yang akan selalu
        terpanggil pertama kali ketika membuat object
        Constructor akan dijalankan terlebih dahulu tanpa dipanggil
    * Atribut
        Merupakan kumpulan variabel yang membentuk object yang dimiliki
        oleh suatu class
        Mewakilkan apa yg dipunyai class
    * Method
        Merupakan sebuah fungsi yang ada dalam class
        Method akan terpanggil jika dipanggil
- Extend digunakan untuk membuat kelas anak dari kelas induk. Kelas anak nantinya mewarrisi semua atribut dan metode dari kelas induk.


__> Document Object Model__
- Document Object Model (DOM) adalah API untuk HTML yang merepresentasikan halaman web pasa suatu dokumen menjadi sebuah Object
- DOM Terdiri dari : 
- DOM Selection Method
  * Terdiri dari beberapa event beserta kegunaanya seperti :
  * getElementById() : menghasilkan element
  * getElementByTagName() : menghasilkan HTML Collection (suatu array yang terdiri beberapa element)
  * getElementByClassName() : menghasilkan HTML Collection
  * querySelector() : menghasilkan element
  * querySelectorAll() : menghasilkan nodeList
- DOM Manipulation
   * Terdiri dari beberapa event beserta kegunaanya seperti :
      * element.innerHTML : merubah isi dari tag yang sudah di seleksi
      * element.style.<propertyCSS> : merubah style dari tag yang sudah di seleksi
      * element.setAttribute() : mengelola / memanipulasi attribute yang sudah di seleksi
      * element.classList.add() : mengelola / memanipulasi class yang sudah di seleksi
- DOM Event
  * Terdiri dari beberapa event beserta kegunaanya seperti :
* onclick : digunakan ketika pengguna mengklik mouse
* onchange : digunakan dalam kombinasi dengan validasi bidang input
* onblur : digunakan ketika meninggalkan kolom input
* onmouseover : digunakan ketika mengarahkan mouse ke atas pada suatu Object
* onmouseout : digunakan ketika mengarahkan mouse ke luar pada suatu Object
* oncopy : digunakan ketika pengguna mencopy suatu Object
- Event Handler :
    -  HTML Attribute (memodifikasi di HTML dan JavaScript)
    - Element Method (menggunakan DOM)
- addEventListener() : melakukan perubahan dalam file JavaScript

>                                                           CHAPTER 8



## 9. Clean Code

__> Pengertian dan Alasan Penggunaan Clean Code__
- Clean Code merupakan istilah untuk kode yang mudah dibaca,  dipahami, dan diubah oleh programmer. 
- Adapun alasan untuk kita menggunakan clean code adalah yang pertama akan memudahkan *Work Collaborations*, karena penulisan kode secara clean code akan mudah dipahami oleh setiap orang di suatu tim baik itu programmer hingga orang non IT. Kemudian, akan memudahkan dalam hal *Feature Development* yang mana nanatinya pengembangan fitur suatu program mudah dijalankan dan akan menghasilkan proses development yang cepat (*Faster Development*)
   

__> 9 Karakteristik Clean Code__
1. Mudah dipahami 
- Berikan  penamaan yang jelas baik itu object, function, variabel dan lain sebagainya. 
2. Mudah dieja dan dicari
- Jangan menyingkat nama variabel 
- Memberikan nama variabel dengan alias yang berhubungan
3. Singkat namun mendeskripsikan konteks
   
4. Konsisten
- Jangan mencampur penulisan, seperti menggabungkan format penulisan snake case, uppercase, lowercase, camelcase. Lebih baik konsisten dalam penulisannya.
5. Hindari penambahaan konteks yang tidak perlu
- Jangan menambahi konteks yang tidak perlu dalam suat object 
- Jangan terlalu bertele - tele
6. Komentar
- Jangan memberi seluruh komentar di setiap line code
- Hanya memberi komentar di suatu block code tertentu
- Berikan komentar yang sesuai dan secukupnya
- Jangan beri komentar  di bawah codenya
7. Good Function
- Jangan terbalik menginputkan sebuah argumen
- Berilah  parameter beserta valuenya 
- Jangan mengubah value aslinya 
- Jelaskan parameter dan returnnya pada komentar sebelum function
8. Gunkan konvensi 
- Bisa meniru style guide untuk airbnb maupun google
9. Formatting
- Lebar baris code 80 - 120 karakter
- Satu class terdiri dari 300 - 500 baris
- Baris code yang berhubungan saling berdekatan
- Dekatkan fungsi dan pemanggilnya (1 package atau 1 class)
- Deklarasi variabel berdekatan dengan penggunanya
- Perhatikan indentasi
- Gunakan prettier. ataau formatter


__> Clean Code Priciple__
1. KISS (Keep It So Simple)
- Hindari. membuat fungsi yang dibuat melakukan A sekaligus memodifikasi B, mengoreksi fungsi C, dst.
- Fungsi atau class harus kecil
- Fungsi dibuat melakukan satu tugas saja
- Jangan gunakan banyak argumen pada fungsi (argumen beberapa value)
- Harus diperhatikan untuk mencapai kondisi yang simbang, kecil dan jumlahnya minimal

2. DRY (Don't Repeat Yourself) 
- Jangan sering copy paste. Untuk menghindari duplikasi code buatlah fungi yang dapat digunakan berulang - ulang.

3. Refactoring
- Merupakan proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal
- Merubah code, tidak merubah return nya
- Adapun teknik untuk refactoring adalah : 
  * Membuat abstraksi
  * Memecah kode dengan fungsi/class
  * Perbaiki. penamaan dan lokas kode
  * Deteksi kode yang memiliki duplikasi

>                                                           CHAPTER 9



## 10. Introduction to Algorithms

__> Pengertian, Karakterisitik, dan Dasar Algoritma__
- Algoritma merupakan prosedur komputasi yang didefinisikan dengan baik dan mengambil nilai sebagai input dan menghasilkan beberapa nilai sebagai output
- Beberapa contoh penerapan algoritma diantaranya adalah check prime number, sorting, dan searching
- Adapun karakteristik algoritma ada 3 yaitu :
    * Memiliki batas (awal dan akhir)
    * Instruksi terdefinisi dengan baik
    * Efektif dan efisien
- Dasar algoritma terdiri dari :
    * Sequential : urutan dalam menyusun langkah -langkah untuk menyelesaikan suatu masalah
    * Branching : digunakan untuk menunjukkan sebuah alur atau flow sebuah program 
    * Looping : konsep untuk melakukan aksi secara berulang sampai pada kondisi berulang itu berhenti
   

__> Pseudocode__
- Merupakan deskripsi bahasa sederhana yang bisa digunakan untuk menuangkan sebuah ide algoritma itu sendiri

__> Flowchart__
- Flowchart merupakan suatu bagan dengan simbol tertentu yang menggambarkan urutan dan hubungan antar proses secara mendetail
- Beberapa simbol flowchart diantaranya adalah :
    * Simbol kapsul : Mulai/selesai
    * Persegi panjang : Proses/kalkukasi
    * Jajar genjang : Input/output
    * Belah ketupat : Perkondisian
    * Segi enam :  Looping
- Contoh studi kasus :
    * Menghitung luas segitiga (menggunakan konsep sequential yang setiap prosesnya harus berurutan)
    * Mencetak faktor bilangan (menggunakan konsep looping )

>                                                           CHAPTER 10



## 11. Introduction to React

__> Pengertian dan Alasan Menggunakan ReactJS__
- ReactJS adalah javascript library untuk mengatur User Interface
- Penggunaan javascript akan menghasilkan web yang interaktif
- Alasan menggunakan ReactJS adalah :
    * Deklaratif : pendekatan terhadap apa yang akan di capai melalui code
    * Component Base : memiliki komponen yang sudah ada tugas masing masing saat menyusun website
    * Learn Once, Write Anywher : ketika sudah mempelajari react, mudah untuk menerapkan dalam mendevelop aplikasi dengan environment yang berbeda (android, mac, web)
    * Sudah populer dan diterapkan dalam beberapa aplikasi (fb, ig, netflix, dll)
   

__> Virtual DOM di ReactJS__
- Virtual DOM di ReactJS adalah Representasi dari UI berbentuk Javascript Object yang disimpan dalam memori 
- Memudahkan untuk memanipulasi perubahan, karena semua sudah disediakan dengan library ReactJS serta meminimalisir permasalahan yang dihadapi dengan DOM Manipulation seperti : 
    * Menghindari code yang berantakan dengan DOM Manipulation manual
    * Sulit mengingat DOM State Sebelumnya
    * Response yang lambat


__> Set Up Environment for ReactJS__
- Tools yang diperlukan : 
    * Browser 
    * Text Editor : VSCode
    * Comman Line Interface : CMD / Powershell
- Beberapa tag Command Line yang biasa digunakan :
    * ls : list folder/file yang ada di directory 
    * mkdir : bat folder dalam directory
    * mv : memindahkan folder, rename folder 
    * rm : delete folder
- Membuat aplikasi dengan create react app :
    * Install node.js (untuk mengecek sudah terinstall atau belum bisa menggunakan : node -v, npm -v)
    * Membuat project dengan : npx create-react-app [nama project dengan smmallcase]
- Dalam react project terdapat beberapa file seperti : 
    * Index.html yang berisi div root yang akan memuat seluurh konten yang ditampilkan di web browser
    * Panckage json yang berisi informasi detail terkait project kita
- Untuk menjalankan suatu project : npm start

>                                                           CHAPTER 11



## 12. React Fundamental

__> JSX, React Component, Component Composition__
*JSX*
- JSX (Javascript XML) adalah ekstensi syntax pada javascript yang disarankan dignakan dalam react, karena penggunaanya  lebih menggambarkan apa yang seharusnya tampak dalam UI. JSX akan menghasilkan react element
- Alasan menggunakan JSX : 
    * Dibuat berdasarkan fakta kalau logika rendering sangat terikat ddengan logic UI
    * Separation of technology -> Separationn Creation
- Spesifikasi jenis elemen react adalah kapitalisasi untuk komponen react adalah : 
    * Kapitalisasi untuk komponen react
    * Huruf Kecil (lowercase) untuk komponen bawaan
- Menaruh expression pada JSX dengan menggunakan kurung kurawal
- Setelah dikompilasi, Ekspresi JSX akan menjadi panggilan fungsi Javascript biasa dan menjadi objek Javascript
- Menentukan atribut dengan JSX adalah sebagai berikut :
    * tanda kutip "" : string literal
    * kurung kurawal {}: ekspresi Javascript
    * camelCase : React DOM
- Menspesifikasikan elemen anak dengan JSX , bisa ditutp dengan />
- Jika tag JSX memiliki anak digunakan parent div

*React Component*
- Component adalah bagian code yang dapat digunakan kembali yang digunakan untuk menentukan tampilan behavior, dan state sebagian UI 
- Membagi UI menjadi beberapa component bisa menerapkan dari UI designer dan peneapan API dari back end. Bisa berupa parent dan child
- Function dan Class component bisa digunakan untuk menyusun react component

*Component Composition*
- Props merupakan properti yang membuat kita bisa memberi argumen/ data pada akomponnen
- Menjadidinmis
- Lupa
- Reader Only
- One Way Data Flow berarti data berasal darisatu sumber yaitu parent ke child component. Child component bisa mengoper kembali ke parent cmponent dengan event handling
- Komposisi komponen berupa kontaimen dan spesialisasi. 


__> React Lifecycle, Conditional & List Rendering__
*React Lifecycle*
- Sederetanevent dari awalkomonen muncul hingga komponen hilang.(Mounting, Updating, Unmounting)
- render() :
 * Paling sering dipakai
 * Reqired saat menulis class component
 * Pure function, __TIDAK BOLEH__ ada setState()
- componentDidMount() : 
    * Dipanggil ketika component sudah di render untuk pertama kali
    * Tempat yang tepat untuk pemanggilan API
    * __BOLEH__ ada serState()
- componeDidUpdate() : 
    * Dipanggil ketika terjadi update (props/state berubah)
- componentWillUnmount()
    * Dipanggil ketika component akan dihancurkan
    * Cocok untuk clean up actions
- Contoh lifecycle method lainnya :
    * shouldComponentUpdate()
    * static getDerivedStateFromProps()
    * getSnapshotBeforeUpdate()

*Conditional & List Rendering*
- Render bersyarat memiliki maksud merender beberapa bagian komponen berdasarkan state dari aplikasi
- Dilakukan dengan :
 * Menggunakan if
 * Inline if dengan opertor &&
 * Inline if else dengan ternary conditional operator
 * Mencegah komponen untuk rendering
 * Key membantu React untuk menggidentifikasi item
- Render List dapat dilakukan dengan membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}
- Key membantu React untuk menggidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan. BIsa dengan menggunakan indeks sebagai key atau menanamkan map() pada JSX


__> Directory Structure, Styling Inline__
*Directory Structure*
- Pengelomokkan berdasarkan jenis file 
- Hindari terlalu banyak nesting 
- Don’t think to much saat memilih penamaan file, just code first
- Menyimpan folder dengan berdekatan.

*Styling Inline*
- Styling dapat dilakukan dengan cara : 
    * Classes dan CSS
    * Atribut style
    * Modul CSS (Hanya mmenyangkut scope di suatu kompnen)

>                                                           CHAPTER 12



## 13. Event Handling

__> State__ 
- State adalah data private sebuah component. Daata ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.
- Karalteristik dari State adalah : 
 * Data yang bisa dimodifikasi menggunakan setState
 * Setiap terjadi modifikasi akan terjadi render ulang
 * Bersifat asyncrhonous
 * Dipakai dalam class
- Props vs State :
    * Props : Read-only
    * Props : __Tidak Bisa__ dimodifikasi
    * State : Bersifat asyncrhonous
    * State __Bisa__ dimodifikasi dengan menerapkan this.setState


__> Statefull & Staateless Component__ 
*Statefull Component*
- Statefull Component  adalah component yang memiliki state
- Statefull Component dibuat dengan class
- Memiliki kelebihan yaitu memiliki Lifecycle di setiap class component
- Mengerti tentang aplikasi 
- Melakukan data fetching (pengambilan data)
- Berinteraksi dengan aplikasi
- Tidak dapat digunakan kembali 
- Meneruskan status dan data ke anak - anaknya

*Stateless Component*
- Merupakan component yang tidak memiliki state, hanya prop
- Dibuat dengan function karena codenya lebih ringkas
- Tidak tahu tentang aplikasi
- Tidak melakukan data fetching (pengambilan data)
- Tujuan utamanya adalah visualisasi 
- Dapat digunakan kembali
- Hanya berkomunikasi dengan induk langsungnya

- Beberapa nama lain dari Statefull dan Stateless Component : 
    * Smart Component & Dump Component
    * Container Component  & Presentational Component 
 
__> Handling Events__
- __Handling Events__ adalah Suatu metode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu komponen
- __Event__ adalah suatu peristiiwa yang dipicu oleh pengguna pada suatu komponen, misalnya ketika tombol ditekan
- Penulisan event di ReactJS adalah dengan camelCase
- Contoh List Event :
    * CLipboard Events : Promise terpenuhi
    * Form Events : onChange, onSubmit 
    * Mouste Events : onClick, onDoubleClick, onMouseOver
    * Generic Events : onError, onLoad

>                                                           CHAPTER 13



## 14. React Hook

__> Introduction React Hook__
- Fitur di React 16.8, dimana bisa menggunakan state dan fitur React yang lain tanpa membuat class
- Yang mendasari adanya react Hooks
	*  Kesulitan untuk menggunakan kembali stateful logic antar komponen
	* Komponen kompleks menjadi sulit untuk dimengerti
	* Kelas membingungkan manusia dan mesin
- Contoh Hooks :
    * Hooks Dasar : useState, useEffect, useContext
    * Hooks Tambahan : useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect,useDebugValue
- Aturan padda Hooks
	* Jangan panggil Hooks dari dalam loops, condition, atau nested functions
	* Jangan panggil Hooks dari fungsi - fungsi JavaScript biasa, dapat memanggil Hooks dengan cara : 
        - Memanggil Hooks dari komponen - komponen fungsi React
        - Memanggil Hooks dari Custom Hooks


__> Implement Use State dan Use Effect__ 
- Menggunakan useState 
	* Digunakan dalam function 
	* Tidak menggunaakan this
	* Menyimpan state dalam suatu variabel
	* Bisa menjaga nilai variabel dalam function
	* Bisa menyimpan angka atau string
	* Import usestate 
	* Yang dikembalikan oleh state adalah sepasang nilai daan fungsi pembaharuan 
	* Langsung panggil variabel yang merupaakan return valuenya
	* Bisa menggunakan banyak variabel state
- Menggunakan useEffect
	* Memungkinkn melakuukan side effect dalam function component 
	* Sama dengan componentDidMount,  componentDidUpdate, dan componentWillUnmount
	* React akan menyimpan fungsi dalam useEffect


__> Create Custom__
- Merupakan hook yang dibuat oleh kita sendiri
- Mengekstrak komponenlogika ke  fungsi untuk dipakai lagi

>                                                           CHAPTER 14



## 15. React Routing

__> Routes__
- Merupakan modul untkuk melakukan proses navigasi di single page application (SPA)
- SPA : Jenis aplikasi website yang hanya ada 1 halaman yang menangani semua aktivitas yag terjadi dalam aaplikasi tersebut
- MPA (Multi Page Application) : Jenis aplikasi website yang perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru
- __KEUNGGULAN__ SPA & MPA :
    - SPA :
        * Waktu loading website jauh lebih cepat
        * Tidak ada query tambahan ke server
        * Front-end yang cepat dan responsif
        * Meningkatkan user experience
    - MPA :
        * SEO(Search Engine Optimation) website akan lebih mudah dioptimasi
        * Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda 
        * Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website 
- __KEKURANGAN__ SPA & MPA :
    - SPA :
        * Tidak bagus dalam hal SEO
        * Berat saat di load/buka pertama kali
        * Kurang aman dibanding Website Biasa
        * Masalah kompatibilitas browser
    - MPA :
        * Kecepatan download website jauh lebih lama jika dibandingkan single page application
        * Perlu mengintegrasikan antara front-end and back-end
        * Lebih sering membutuhkan maintenance dan update
        * Mungkin akan lebih menemukan masalah performa pada website
- Implementasi routing akan menggunakan library react router 
- BrowserRouter : digunnakan sebagai router yang menggunakan API history dari HTMLL 5 sehingga dapat mengguakan location untuk sinkronkan UI dengan url.
- Route : digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web
- Path (attribute) : merupakan url pada browser pada proses routing
- Component (attribute) : merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan
- Switch : digunakn untuk membungkus kumpulan beberapa component Route
- Exact : :memastikan route hanya merender component yag memiliki path yang cocok, JIka tidak ada yang cocok akan di render route terakhir dengan component notfound
- Link : digunakan untuk berpindah antar halaman
- To (property) : merjuk pada path di route yang akan dituju


__> Use URL Params in React__
- URL Params : Merupakan parameter yang nilainya ditetapkan secara dinamis dalam URL halaman. Contoh : /movie/titanic
- Bisa mengakses parameter dalam Props 
- Perbedaan Link dan Redirect :
    - SPA :
        * Dapat digunakan pada kondisi apapun
        * Memberikan history baru pada browser
        * Bereaksi dengan click seperti a href
    - MPA :
        * Lebih sering digunakan pada halaman 404
        * Menimpa history pada browser
        * Bereaksi dengan suatu kondisi seperti loggedIn ? <Redirect to="/dashboard"/> : <PublicHomePage/>


__> Hook Routig React__
- useHistory : memberi akses ke instance rwayat yang dapat digunakan untuk bernavigasi.
    - Contoh useHistory : 
        * length : (angka) Jumlah entri dalam tumpukan riwayat
        * go : (fungsi) Memindahkan penunjuk di tumpukan riwayat sebanyak n entri
        * goBack : (fungsi) Setara dengan go(-1)
        * goForward : (fungsi) Setara dengan go(1)
        * push : (fungsi) Mendorong entri baru ke tumpukan riwayat
        * replace : (fungsi) Mengganti entri saat ini di tumpukan riwayat history
- useLocation : mengembalikan objjek lokasi yang mewakili URL saat ini. Diibaratkan dengan useState yang mengembalikan lokasi baru, setiap kali URL berubah
- useParam : mengembalikan objek pasangan kunci / nilai parameter URL. Digunakan untuk mengakses match.params dari <Route> saat ini
- useRouteMath : digunakann untuk mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Digunakann untuk mengkseske data kecocokan tanpa benar benar merender <Route>

>                                                           CHAPTER 15



## 16. React Form

__> Basic Form__
- Form merupakan salah satu hal kursial dalam pengembangan aplikasi wevsite yag biasanya digunakan untuk menghandle inputan dari user.
- Macam Form :
	* Elemen Input : inputan tidak terlalu pajang
	* Elemen Text Area : inputan yang panjang 
	* Elemen Select : digunakan untuk inuputan yang pilihannya sudah ditetukan
	* Elemen Radio. Button. : Hanya bisa memilih 1 ppilihan
	* Elemen Check Box ; Bisa memilih lebih dari 1 pilihan 
	* Beberapa elemen lain : image, number , date, email, file, color, checkbox, hidden, month, password, radio, range, reset, search, time, url, week, tel, submit


__> Controlled & Uncontrolled Component__
*Controlled Component*
- Controlled Component merupakan sebuah elemen masukan form yang nilainya dikontrol oleh Reat melalui state pada react yang kemudian komponen dirender untuk mengontrol apa yang terjadi di react. 
- Menerima nilai saat ini sebagai props dan callback untuk mengubah nilai tersebut
- Dibutuhkan nilai baru dari input dan mengaturnya di state
- Komponen form dapat merespon perubahan input dengan segera oleh :
    * Validasi (umpan balik)
    * Penonaktifan tombol (kecuali semua field memiliki data valid)
    * Implementasi format tertentu 
- Menjadi controlled jika menetapkan nilainya melalui props
- Macam - macam Elemen, Vaalue Property, Change Callbaackk, dan New Value in Callback :
    * Text :
        * Value : "String"
        * Change Callback : onChange
        * New Value in Callback : event.target.value
    * Checkbox :
        * Value : checked={boolean}
        * Change Callback : onChange
        * New Value in Callback : event.target.checked
    * Radio :
        * Value : checked={boolean}
        * Change Callback : onChange
        * New Value in Callback : event.target.checked
    * Textarea :
        * Value : "String"
        * Change Callback : onChange
        * New Value in Callback : event.target.value
    * Select :
        * Value : "option value"
        * Change Callback : onChange
        * New Value in Callback : event.target.value
- Implementasi controlled component di text-area :
	- Definisikan state  (memiliki nilai awal)
	- Memperbarui event trget value
- Implementasi text select :
	* Menggunakan state
	* Menggunakan atribut value (bukan selected)
	* Bia memasukkan array ke atribut value
- Menambahkan atribbut name pada setiap elemen  atau  bisa juga menghandle inputannya saat menanggapi banyak inputan.

*Uncontrolled Component* 
- Input yang tidak terkontrol dalam HTML.
- Menarik nilai filed saat kita membutuhkannya (kuraang powerful).
- Uncontrolled Component merupakan alternatif lain, dimaana data form akan ditangaani oleh DOM nya sendiri tanpa event handler, bisa menggunakan ref (useRef). Defiisikan state dengan useRef lalu panggil refnya.
- Nilai Default di uncontrolled component dengan menggunakan atribut defaultValue atau defaultChccked.
- Input type file nilainya bisa di set oleh pengguna bukan code.

__PERBEDAAN FITUR UNCONTROLLED dan CONTROLLED COMPONENT__

*Controlled Component*
- one-time value retrieval
- validating on submit
- instant field validation
- condiionallu disabling submit button
- enforcing input format
- several inputs for one piece of data
- dynamic inputs
  
*Uncontrolled Component*
- one-time value retrieval
- validating on submit


__> Basic Validation__
- Alasan validasi form :
	* Menari input data yang benar en sesuaai. formaat
	* Melindungi akun pengguna
	* Melindungi sistm / aplikasi
- Tipe validasi :
	* Validasi dari client (bowser) agar dta sesuai kebutuhaan form. user friendly, pengguna bisa meengetaahui.
		* Built in form valdation dari HTML 5
		* Menggunakan Javascript 
	- Validasi dari sisi server mbertugas memvalidasi data kembali dari sisi server
- Built in :
	* Required digunnakan untuk emenentukan field form perlu diisi sebelum form dikirimkan
	* minlength dan maaxlength digunakan untuk menentukan jumlah karakter minimal dan maksimal yang dimasukkan
	* min dan max : digunaakan untuk menentukan nilai minimum dan maksium angka yang bisa dimaskkan.
	* type digunakan untuk menentukan apakah data berupa angka, text, email, aatau type lainnya
	* pattern digunakan untuk menentukan regular expression (regex) yng mendefinissikan pola data yang boleh dimasukkan

- Validasi JS digunakan saat :
	* Ada perubaha di form (onChange) dimana validasi dilakukan dengan realtime
	* Ketika menekan tombol submit (onSubmit) namun tidak realtime

>                                                           CHAPTER 16



## 17. Global State Management and Data Fetching

__> Global State Introduction__
* Data yang sama dipakai di tempat yang berbeda
* Menggunakan redux store
* Redux merupakan global stat yang populer
* Kapan menggunakan Redux ?: 
	* Banyak state yang perlu ditaruh di banyak tempat
	* State pada app sering berubah
	* Logic untuk mengubah state kompleks
	* Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
	* Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu
* Redux libraries dan tools : 
  * React-Redux 
  * Redux Toolkit 
  * Redux DevTools Extension 
* 3 Komponen penting :
  * Action : memberikan informasi dari aplikasi ke store
  * Reducer : pure JS functions yang mengambil state aplikasi saat ini dan object aaction lalu megembalikan state aplikasi terbaru 
  * Store : objek sentral yang menyimpn state. pada aplikasi 
* Cara memakai dan mengubah state :
  * Hooks : import useSelector dan useDispatch dari react redux
  * Connection 
* Redux : libbrary manajemen state global
* Redux : menggunkan struktur “one way data flow”
* Redux : menggunakan beberapa tipe code (action, reducer, store)


__> Redux Thunk & Persisted State__
**Redux Thunk**
* Redux Thunk adalah thunk middleware untuk redux yang memungkinkan kita membuat action creator yang mengembalikan function bukan action
* Alasan menggunakan redux thunk : Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data
* Install redux thunk : npm install reddux-thunk

**Persisted State**
* Merupkan cara untuk menyimpan state ke storage 
* Contoh penerapan : saat reload form, ada beberaapa data yang masih terisi (tersimpan) di form tersebut
* Install library : npm install redux-persist 


__> Data Fetching__
* Merupakan proses request data ke server
* Cara untu fetching data ddi react 
	* Fetch API :
		* method : GET, POST, PUT, DELETE, HEAD
		* url : URL dari Request
		* body : body dari request
		* headers : Object Headers
		* referer : referer dari request
		* mode : cors, no-cors, same-origin
		* credentials : omit, same-origin
		* redirect : follow, error, manual
		* integrity : subresources integrity value
		* cache : cache mode (default, reload)
		*Memiliki Respons berupa field atau method seperti :*
		* type - basic, cors 
		* url
		* useFinalURL
		* status - status code (ex: 200, 404, etc)
		* ok - boolean untuk respon sukses (status 200-299)
		* statusText - status code (ex : OK)
		* headers - Headers object dari respon
		* clone()
		* error()
		* redirect()
		* arrayBuffer()
		* blob()
		* formData()
		* json()
		* text()
	* Axios
	* React Query Library

>                                                           CHAPTER 17



## 18. Testing

__> Testing__
* Testing merupakan proses memverifikasi bahwa test assertions (ekspresi boolean yang mengembalikan nilai true kecuali ada bug) kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi.
* Manfaat Testing :
	- Aplikasi memiliki coverage yang baik.
	- Memudahkan memperbaiki code yang error.
	- Mengurangi bug pada aplikasi.
* Kategori Testing : 
	1. Rendering component trees (dilakukan dalam environtment tes yang disederhanakan dan ditegaskan outputnya)
	2. Menjalankan aplikasi lengkap (dilakukan dalam environtment browser)
* Hal yang dipertimbangkan dalam memilih tools untuk testing :
   1. Kecepatan iterasi vs environtment yang realistis
   2. Seberapa banyak mock
* Rekomendasi Tools : 
	1. Jest : Test runner pada javascript yang memungkinkan untuk mengakses DOM melalui jsdom
	2. React Testing Library (RTL) : Seperangkat helpers yang memungkinkan untuk mengetes komponen pada React tanpa bergantung pada detail implementasinya


__> Create Basic Testing with RTL__
* Fungsi Render RTL : Merender file JSX apapun yang dibutuhkan
* Fungsi Debug RTL : Membuktikan file JSX sudah terender atau belum
* Memilih Element dengan RTL :
	- getByText() : untuk memilih teks dari elemen yang sudah dipilih
	- getByLabelText() = ```label for="search">``
	- getByPlaceHolderText()=```<input placeholder="Search"/>```
	- getByAltText()= ```<img alt="profile"/>```
	- getByDisplayValue()= ```<input value="JavaScript"/>```
* Testing Handle Event : testing pada handling onChange
* Testing Handle Asynchronous: testing saat ingin fetch sebuah API, dimana perlu membuat mock promise yang dilihat hasilnya ketika resolve atau reject dan menyesuaikan skenario


__> Testing Custom Hooks__
* Menginstall library React Hooks Testing Library : npm i -D @testing-library/react-hooks
* Biasanya diterapkan untuk testing value, callback, dan re-render.

>                                                           CHAPTER 18



## 19. Deployment

__> Build React App__
* Build aplikasi dilakukan agar aplikasi menjadi versi production, dimana versi tersebut memiliki performa yang lebih ringan dan cepat.
* Cara menjalankan yang akan dideploy versi produksi : npm run build
* Cara menjalankan aplikasi yang optimal di lokal komputer : 
	- Install serve : npm install -g serve
	- Jalankan serve di lokal : serve -s build
* CRA Build Link : https://cra.link/deployment

__> Deployment__
* Deployment merupakan kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah dibuat, dengan harapan aplikasi tersebut bisa diakses oleh orang banyak.

__> Tools For Deployment__
__SURGE__:
* Surge merupakan layanan penerbit website statik gratis untuk Front-End Developers.
* Memiliki sub domain .surge.sh
* Install surge di terminal  : npm install --global surge
* Cara run : jalankan perintah `surge` di terminal
* Cara Teardown Project dengan surge : surge teardown vancouver.surge.sh (menyesuaikan nama project)

__NETLIFY CLI__:
* Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continuous Deployment dimana memungkinkan untuk mempublish website statis secara gratis.
* Terintegrasi dengan Github, Gitlab, dan Bitbucket.
* Cara Deploy dengan Netlify :
  1. Buat akun di www.netlify.com
  2. Install di terminal : npm install netlify-cli -g
  3. Jalankan perintah `netlify deploy` di terminal
  4. Verify akun melalui browser, pilih Authorize
  5. Pilih `Create & Configure a New Site`. Untuk team yang sudah tersedia, site name opsional
  6. Pilih lokasi file yang akan di deploy. 
  7. Pilih ./build

>                                                           CHAPTER 19



## 20. GraphQL Basic

__> GraphQL Overview__
- GraphQL merupakan bahasa query untuk API , dan runtime sisi server untuk mengeksekusi query dengan menggunakan system yang ditetapkan untuk data yang dibuat
- GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan
- Dengan menggunakan GraphQL, kita bisa memakai single endpoint untuk setiap request yang dibutuhkan

__> Hasura, Heroku, Apollo SetUp__

**HASURA**:
- Hasura merupakan layanan yang menyediakan graphql dan rest API
- Dapat dikelola melalui cloud atau dihosting sendiri
- Dapat diakses di : https://hasura.io/
- Untuk mengakses GraphQL secara publik dapat mengubah di setting hasura, klik env vars, klik HASURA_GRAPHQL_ADMIN_SECRET, dan terakhir klik **delete** icon
- Untuk membuat Query, Mutation, Subscription bisa membuka tab API dan mulai mengeksekusi query nya

**HEROKU**:
- Heroku merupakan platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman.
- Heroku juga menyediakan database Postgre gratis
- Dapat diakses di : https://heroku.com/

**APOLLO SET UP**:
- Apollo Client merupakan management library untuk Javascript yang memudahkan untuk mengelola local dan remote data dengan GraphQL
- Dapat digunakan untuk mengambil (fetch), menyimpan (cache), dan memodifikasi (modify) data aplikasi, sambil memperbarui UI secara otomatis.
- Apollo CLient digunakan untuk melakukan operasi GraphQL (query, mutation, dan subscription) di dalam aplikasi React atau Next JS
- Instalasi :
  1. BUat React Project : npx create-react-app react-graphql
  2. Install GraphQL dan Apollo Client : yarn add graphql @apollo/client

__> Query, Mutation, Subscription__

- Tiga Fitur Utama dalam GraphQL :
  1. Query : mendapatkan data berdasarkan query yang didefinisikan secara spesifik
  2. Mutation : digunakan untuk insert, update, dan delete data
  3. Subscription : mengupdate data secara realtime atau berdasarkan event tertentu

**QUERY**:

- Contoh Penerapan Query:

1. Basic Query :
   ```{
   query {
   movies {
   id
   title
   }
   }
   }
   ```
   - **Note** : Basic Query tersebut akan menampilkan id dan title dalam tabel movies
2. Multiple Related Data Sources / Collection Query :
   ``` {
   query {
   movies {
   id
   title
   director {
   name
   age
   }
   }
   }
   }
   ```
   - **Note** : Multiple Query tersebut akan menampilkan id dan title dalam tabel movies serta name dan age dari tabel director yang berelasi dengan tabel movies
3. Multiple Unrelated Data Sources / Collection Query :
   ```{
   query {
   movies {
   id
   title
   }
   books {
   id
   title
   }
   }
   }
   ```
   - **Note** : Multiple Unrelated Query tersebut akan menampilkan id dan title untuk masing-masing di tabel movies dan books
4. Fragments Query :
   ```fragment FR_Movie on movie {
   title
   year
   }
   {
   query {
   movies {
   …FR_Movie
   director {
   name
   age
   }
   }
   }
   }
   ```
   - **Note** : Fragmen GraphQL adalah bagian dari logic yang dapat dibagi antara beberapa query dan mutasi. Kita dapat menggunakan fragmen untuk menyederhanakan query atau mutasi

**MUTATION**:

- Mutasi pada dasarnya adalah fungsi untuk update, insert dan delete data
- Kita perlu mendefinisikan operasi apa yang kita inginkan dan tentukan data apa yang perlu dikembalikan dalam GraphQL

- Contoh Penerapan Mutation :
  ```mutation {
  insert_film(
  objects: {
  title: "Something",
  description:"New Movies" }) {
  returning {
  id
  }
  }
  }
  ```
  - **Note** : Merupakan proses mutasi untuk insert data film

**SUBSCRIPTION**:

- Subscription merupakan fitur GraphQL dimana memungkinkan server mengirim data ke client saat ada spesifik event
- Biasanya diimplikasikan dengan WebSockets
- Subscription terjadi di sisi client (bukan sisi server)
- Ketika data di modifikasi, kita dapat langsung mendapat update terbaru secara realtime

- Contoh Penerapan Subscription :
  ```subscription {
  person {
  id
  name
  }
  }
  ```
  - **Note** : Merupakan proses subscription pada data person

>                                                           CHAPTER 20



## 21. Relational Database

__> Database Relationship__

- Database merupakan sekumpulan data yang terorganisir
- Adapun macam - macam relasi dalam database adalah sebagai berikut :

**One to One**

- Relasi yang berbentuk satu baris data di sebuah tabel dapat berhubungan dengan satu baris data di tabel lain
- Contoh : 1 user memiliki 1 foto profil

**One to Many**

- Relasi yang berbentuk satu baris data di sebuah tabel dapat berhubungan dengan satu atau lebih baris data di tabel lain
- Contoh : 1 user memiliki banyak tweet

**Many to Many**

- Relasi yang berbentuk banyak baris data di sebuah tabel dapat berhubungan dengan banyak data di tabel lain
- Contoh : 1 user memiliki banyak follower user dan 1 user bisa difollow banyak user

__> Entity Relationship Diagram (ERD)__

- ERD merupakan diagram yang digunakan untuk mendesain database sebelum diimplementasikan

__> Relational Database Management System (RDBMS)__

- RDBMS merupakan software yang menggunakan relational database model sebagai dasarnya
- Contoh : MySQL
- SQL merupakan bahasa pemrograman khusus yang digunakan untuk manajemen data dalam RDBMS
- Jenis Perintah SQL :

**DDL: Data Definitions Language**

- Contoh : Create Database, Drop Table, Dron Database, Renamae Table, Use Database

**DML: Data Manipulation Language**

- Merupakan perintah yang digunakan untuk memanipulasi data dalam tabel dari suatu database
- Contoh : Insert, Select, Update, Delete, Like/Between, And/Or, Order By, Limit

**DCL: Data Control Language**

- Contoh : Grant (Memberikan hak akses pengguna ke database), Revoke (Menghilangkan hak akses yang telah diberikan dengan perintah GRANT)

>                                                           CHAPTER 21



## 22. GraphQL Query and Apollo Client

__> Apollo CLient__ 

- Apollo Client merupakan management library untuk Javascript yang memudahkan untuk mengelola local dan remote data dengan GraphQL
- Dapat digunakan untuk mengambil (fetch), menyimpan (cache), dan memodifikasi (modify) data aplikasi, sambil memperbarui UI secara otomatis


__> Apollo Client ReactJS SetUp__
- Adapun langkah - langkah melakukan SetUp Apollo CLient dalam ReactJS adalah sebagai berikut : 
    1. Install : npm i @apollo/client
    2. Buat apollo-client.js dalam folder src
    3. Dalam apollo-client.js lakukan deklarasi function client yang berisi uri dari link project hasura dan admin secret nya, kemudian lakukan export fungsi tersebut
    4. Setting apollo provider dalam index.js dengan cara import ApolloProvider dan apollo-client.js


__> Query with Apollo Client__
- Langkah untuk melakukan Query adalah dengan cara :
   1. Import gql dan UseQuery, lalu tulis query yang berasal dari Hasura
   2. Lakukan get initial data dengan menggunakan query di server, pakai useQuery
   3. Consume data dalam file jsx nya yang bisa dilakukan dengan cara mapping ariabelnya
   4. Saat ingin menjalankan query sebagai respons terhadap action tertentu (seperti klik tombol), bisa menerapkan useLazyQuery
   5. Kita juga bisa melakukan refetching untuk merefresh query yang merupakan hasil respons terhadap action tertentu (seperti klik tombol) tadi

>                                                           CHAPTER 22



## 23. GraphQL Mutation

__> Mutation with Apollo Client and Mutation Insert Data__ 

__Mutation with Apollo Client__ 
- Saat akan melakukan Mutation, import useMutation hooks dari @apollo/client

__Mutation Insert Data__ 
- Adapun langkah Mutation Insert Data adalah sebagai berikut :
    1. Invoke useMutation dan gunakan array destructuring yang mendefinisikan handler mutation (contoh : insertTodo)
    2. Lakukan refetchQueries berdasarkan query yang didefinisikan 
    3. Panggil function yang dilakukan destructuring tadi (insertTodo)


__> Mutation Update Data__
- Adapun langkah Mutation Update Data adalah sebagai berikut :
    1. Definisikan Update Query
    2. Buat Mutation Handler untuk update (contoh: updateTodo)
    3. Panggil query update yang telah didefinisikan tadi

__> Mutation Delete Data__
-  Adapun langkah Mutation Delete Data adalah sebagai berikut :
    1. Definisikan Delete Query
    2. Buat Mutation Handler untuk delete (contoh: deleteTodo)
    3. Panggil query  delete yang telah didefinisikan tadi

>                                                           CHAPTER 23



## 24. GraphQL Subscription

__> Setting Subscription__

- Adapun langkah untuk Setting Subscription adalah sebagai berikut :
  1. Install subscriptions-transport-ws agar bisa melakukan koneksi ke websocket : npm i @apollo/client subscriptions-transport-ws
  2. Import semua modul dan pisahkan antara http dan websocket link


__> Subscription__

- Adapun langkah Subscription adalah sebagai berikut :
  1. Deklarasikan variabel httpLink (untuk query dan mutation) dan variabel wsLink untuk subscription
  2. Tambahlan split function dan gunakan sebagai link saat membuat client

__> Subscription using useSubscription dan subscribeToMore__

**Subscription using useSubscription**

- Adapun langkah nya adalah sebagai berikut :

  1. Import useSubscription dari @apollo/client
  2. Definisikan variabel subscriptionnya (contoh :subscriptionTodo) yang berisi gql untuk subscription
  3. Lakukan Invoke subscription dan mulai konsumsi data

**Subscription using useSubscribeToMore**

- usSubscribeToMore merupakan fungsi yang memungkinkan untuk mengeksekusi subscription
- Biasanya ntuk subscripe spesifik fields yang termasuk di dalam query nya
- Atau dapat digunakan juga saat server ingin return 1 data yang update, bukan seluruh data, maka kita harus update data sebelumnya dengan cariabel sebelumnya dan mengembalikan data yang updated
  
  >                                                           CHAPTER 24


- Pada pembelajaran Kegiatan Kampus Merdeka Studi Independent "How to be an Ideal Top Search React JS Front-End Engineer" di Alterra Academy, dilakukan pembelajaran di bidang Front End dimana kegiatan tersebut dimulai dari pengenalan dasar Desain melalui Figma,HTML, CSS, penggunaan react seperti event handling, state, component, hooks, form, routing, hingga consume API baik melalui MockAPI atau GraphQL Hasura. Pembelajaran ini menjadikan saya memiliki pengalaman yang mendalam untuk mempelajari bidang Front End yang bisa diimplementasikan ke depannya baik di bidang pendidikan hingga karir.