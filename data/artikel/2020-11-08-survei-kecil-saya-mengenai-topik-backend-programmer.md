---
image: "https://res.cloudinary.com/softwaremakassar/image/upload/c_scale,q_50,w_980/v1604786927/munirapp.github.io/artikel/2020-11-08.webp"
title: "Survei Kecil Saya Mengenai Topik Backend Programmer"
date: "2020-11-08"
desc: "Berawal dari keinginan saya untuk membuat sebuah project e-book tutorial programming, saya melakukan sebuah riset dengan mengadakan sebuah survey di beberapa grup facebook komunitas bahasa pemrograman Indonesia."
author: "Munir AP"
slug: "survei-kecil-saya-mengenai-topik-backend-programmer"
---

> Berawal dari keinginan saya untuk membuat sebuah project e-book tutorial programming, saya melakukan sebuah riset dengan mengadakan sebuah survei di beberapa grup facebook komunitas bahasa permograman Indonesia.

Karena e-book yang akan saya rilis berbasis bahasa pemrograman _Javascript_. Saya lalu memutuskan untuk melakukan survei di 4 grup komunitas Indonesia yaitu grup [Javascript Indonesia](https://www.facebook.com/groups/sencha.indo.admin), [Node.js Indonesia](https://www.facebook.com/groups/nodejsid), [Laravel Indonesia](https://www.facebook.com/groups/laravel) dan terakhir [PHP Indonesia](https://www.facebook.com/groups/phpid). Jika ada pertanyaan kenapa saya juga melakukan survei di grup Laravel Indonesia dan PHP Indonesia padahal ebook yang akan dirilis basisnya bukan bahasa _PHP_? Jawabannya karena ada berbagai faktor.

Faktor pertama, walaupun nanti e-book saya akan berbentuk 1 format bundle, namun di dalamnya saya akan menyajikan topik bahasannya menjadi 2 bagian yang terpisah yaitu bagian _Backend Programming_ dan _Frontend Programming_. Dimana setiap bagian ini akan mengadopsi konsep _Language / Framework Agnostic_, sehingga nantinya diharapkan pembaca e-book saya bisa menentukan sendiri apakah ingin mengimplementasikan kedua bagiannya (_Fullstack_), atau hanya ingin mengambil bagian _Frontend Programming_ saja dan mengimplementasikan _Backend_ dengan bahasa pemograman lain (_PHP, Python, Golang, Ruby dll._) atau juga mungkin sebaliknya.

Faktor kedua, tidak dipungkiri untuk saat artikel ini ditulis, _PHP_ adalah bahasa pemrograman yang masih paling populer dan paling banyak marketnya di Indonesia (_indikator singkatnya bisa dilihat dari ke-empat grup yang saya riset, grup PHP Indonesia adalah grup yang paling banyak anggota membernya_). Kemudian kenapa saya memilih grup Laravel Indonesia dibandingkan grup framework PHP lain? karena saya menganggap
development di framework Laravel lebih _friendly_ dan lebih mudah beradaptasi dengan framework frontend Javascript semacam Vue, React, Angular dll. dibandingkan dengan framework PHP lainnya (_hanya opini pribadi no offense_ 😄).

### Mekanisme Survei

Untuk media survei, saya memanfaatkan fitur polling yang disediakan facebook dalam menu postingan grup. Saya kemudian memposting polling tersebut ke 4 grup sebanyak 2 sesi. Baik sesi pertama dan sesi kedua pollingnya bersifat _multiple choices_, artinya 1 anggota member group bisa memilih banyak pilihan jawaban yang saya sediakan.

Untuk sesi pertama saya membedakan lagi pertanyaan dan pilihan jawaban antara Grup Javascript(Javascript Indonesia, Node.js Indonesia) dan Grup PHP (PHP Indonesia, Laravel Indonesia).

Di Grup Javascript saya memberi pertanyaan dan pilihan jawaban kira-kira sebagai berikut:

```
Untuk menghandle backend memakai bahasa pemrograman / framework apa saja?
- Express
- Nest
- Adonis
- Other NodeJS Framework
- Other Programming Languages
etc.
```

Sedangkan di Grup PHP saya memberi pertanyaan dan pilihan jawaban kira-kira sebagai berikut:

```
Bahasa Pemrograman / Framework apa yang dipilih jika ada waktu/kesempatan belajar bahsa pemrograman selain PHP?
- NodeJS
- Golang
- Python
- Java
- Ruby
- Other Languages/Framework
etc.
```

Untuk sesi kedua saya menyamakan pertanyaan dan pilihan jawaban ke semua grup dengan pertanyaan dan pilihan jawaban kira-kira sebagai berikut:

```
Teknologi apa saja yang sedang / ingin / familiar digunakan?
- Git
- Docker
- PostgreSQL
- Redis
- WSL
- Firebase
- Serverless
```

Postingan polling saya bisa dilihat di link berikut (_Tidak semua postingan bersifat publik, di sebagian grup , teman-teman harus menjadi anggota member terlebih dahulu untuk melihat postingan_):

- [polling di Javascript Indonesia sesi 1](https://www.facebook.com/groups/sencha.indo.admin/permalink/3488052994611284/), [polling di Javascript Indonesia sesi 2](https://www.facebook.com/groups/sencha.indo.admin/permalink/3506936789389571/)
- [polling di PHP Indonesia sesi 1](https://www.facebook.com/groups/phpid/permalink/10158643955436101/), [polling di PHP Indonesia sesi 2](https://www.facebook.com/groups/phpid/permalink/10158660974026101/)
- [polling di Node.js Indonesia sesi 1](https://www.facebook.com/groups/nodejsid/permalink/2039504299518329/), [polling di Node.js Indonesia part 2](https://www.facebook.com/groups/nodejsid/permalink/2039504299518329/)
- [polling di Laravel Indonesia sesi 1](https://www.facebook.com/groups/laravel/permalink/1852498348221846/), [polling di Laravel Indonesia sesi 2](https://www.facebook.com/groups/laravel/permalink/1859954527476228/)

Jawaban dari polling semua grup saya kumpulkan dan buatkan rangkumannya ke dalam format spreadsheet google drive, teman-teman bisa melihat rangkumannya di link berikut:

- [Spreadsheet Rangkuman Survei](https://docs.google.com/spreadsheets/d/1u_055dzyWYKk2OH_a4hopK_D3-JEA_Mx3-ekVI1V300/edit?usp=sharing)

### Highlight Survei

Ada beberapa _highlight_ atau hal menarik dari rangkuman yang saya buat berdasarkan jawaban pilihan polling-polling tesebut. Highlight pertama dari polling sesi 1 di Grup Javascript, di sini bisa dilihat baik itu di Grup Javascript Indonesia ataupun Grup Node.js Indonesia framework [ExpressJS](https://expressjs.com/) masih menjadi opsi pilihan terbanyak yang dipilih di antara sekian banyaknya framework backend berbasis Javascript.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=1243669275&format=interactive" style="width:320px; min-height:200px; margin:0 auto; display:block;"></iframe>

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=1751313712&format=interactive" style="width:320px; min-height:200px; margin:0 auto; display:block;"></iframe>

Highlight di Grup PHP untuk Survei 1 tak kalah menarik juga, dari hasil polling terlihat kalau Javascript atau NodeJS menjadi pilihan populer sebagai bahasa pemrograman alternatif pengganti PHP untuk masalah backend. Bahkan di Grup Laravel Indonesia, NodeJS melejit menjadi pilihan paling terbanyak, sedangkan di grup PHP Indonesia NodeJS menempati posisi ke dua, hanya kalah dengan jumlah yang lumayan tipis dari Python.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=1864635813&format=interactive" style="width:320px; min-height:200px; margin: 0 auto; display:block;"></iframe>

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=1383285529&format=interactive" style="width:320px; min-height:200px; margin: 0 auto; display:block;"></iframe>

Lanjut ke highlight Survei 2, disini pertanyaannya seragam untuk ke-empat grup. Nah menariknya, bisa dilihat kalau pilihan terbanyak dari semua grup kompak menempatkan _Git_ di posisi pertama. Sedangkan di posisi kedua ada perbedaan di Grup Javascript dan Grup PHP. Grup Javascript menempatakan _MongoDB_ di posisi kedua, sedangkan Grup PHP menempatkan _Docker_. Untuk opsi _MongoDB_ selain di Grup Javascript mendapatkan posisi yang cukup tinggi kecuali di grup Laravel Indonesia. Yang menariknya lagi, tidak hanya untuk posisi pertama, ke-empat grup juga kompak menempatkan _Serverless_ menjadi pilihan yang paling terakhir.

<div style="display: flex; justify-content:center;">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=886910479&format=interactive" style="width:320px; min-height:200px"></iframe>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=1798131549&format=interactive" style="width:320px; min-height:200px"></iframe>
</div>

<div style="display:flex; justify-content:center;">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=99933740&format=interactive" style="width:320px; min-height:200px"></iframe>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=1142778365&format=interactive" style="width:320px; min-height:200px"></iframe>
</div>

Untuk jumlah responden yang ikut dan aktif berpartisipasi dalam polling ini paling banyak berasal dari grup Laravel Indonesia dengan total suara responden sebanyak **2003** suara untuk Survei 1 dan **1856** suara untuk Survei 2.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcHbj6IHMHIEQrCQuWhttul7Yg75HXj62mNzJah4WzpCrwD8umr5qRxkD-4NPvJwQwKs6x6MZCC8bq/pubchart?oid=592519779&format=interactive" style="width: 650px; min-height:380px; margin: 0 auto;"></iframe>

### Disclaimer dan Konklusi

Sebelum menuju konklusi, saya ingin memberi **disclaimer** mengenai survei yang saya lakukan, yang dimana survei yang saya lakukan ini belum bisa dijadikan patokan yang benar benar akurat dan ilmiah karena belum memenuhi kaidah-kaidah metodologi survei. Banyak faktor yang membuat hasil survei ini menjadi bias, contoh sederhananya seperti jumlah responden yang tidak konsisten di setiap grup dan tentu saja banyak kekurangan lainnya.

Namun tak ada salahnya, bila kita menarik sebuah konklusi berupa asumsi dasar dari hasil polling dan higlight data yang dijabarkan sebelumnya. Seperti programmer atau developer Indonesia rata-rata sudah _melek_ akan pentingnya menggunakan [Version Control System](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) khususnya git dalam proses development software mereka. Bahkan untuk teknologi yang agak advanced 2 atau 3 tahun yang lalu seperti _docker_, sudah mulai banyak yang menaruh perhatian atau familiar menggunakannya. Terakhir dari hasil polling bisa juga kita asumsikan bahwa Node.js dan Express menjadi pilihan alternatif yang populer bagi developer Indonesia yang dasarnya berasal dari bahasa pemograman PHP dan ingin mencoba untuk belajar bahasa pemrograman yang baru.

Jujur setelah mengadakan survei kecil-kecilan ini saya jadi berkeinginan untuk membuat forum survei yang lebih ideal seperti yang diadakan oleh web [State Of JS](https://stateofjs.com/) tapi khusus untuk developer-developer Indonesia. Semoga niat saya tercapai tahun depan, dan ebook saya bisa segera rilis tepat pada waktunya 😊.
