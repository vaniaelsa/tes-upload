# All Summary "How to be an Ideal Top Search React JS Front-End Engineer" 
# By Elsa Vania - ReactJS B

> 3.Version Control And Branch Git

### Version Control and Branch Git
- Versioning merupakan kegiatan mengatur versi dari source code program. 
- Version control sistem merupakan suatu sistem yang merekam perubahan-perubahan. Version Control System terdiri dari :
    * Single User
    * Centralized
    * Distributed 
-  Adapun salah satu version control system populer yang bisa digunakan untuk pengembangan program atau software bersama sama (terdistribusi) adalah GIT. GIT akan melacak seluruh perubahan yang terjadi.


### Set Up, Seving Changes, Undo, Syncing, Branch, dan Pull Reguest Git Project
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


### Optimize Workflow Collaboration
Adapun beberap hal penting yang dilakukan agar alur saat berkolaborasi dalam mendevelop suatu program adalah dengan cara sebagai berikut :
- Membiarkan branch master atau main agar tidak dilakukan perubahan. Untuk suatu perubahan, lebih baik membuat branch baru seperti branch development.
- Hindari perubahan di branch development, lebih baik membuat branch baru seperti branch feature untuk mengembangkan fitur suatu program 
-  Lakukan penerapan fitur dengan merge  branch development dan branch fitur
-  Bila sudah selesai, merge branch development ke dalam branch master atau main.

> 

