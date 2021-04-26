## Typescript Basic

Tutorial ini dari sebuah video youtube dengan link [disini](https://www.youtube.com/watch?v=BnIhk4igd8I)

## Definisi

Typescript merupakan superset pada javascript, dimana memungkinkan kita menulis static type pada javascript.
Maksudnya gimana.. okay kita langsung saja ke contohnya

```javascript
let a = 1;
typeOf(a); // number
a = "fadliselaz";
typeOf(a); // string
```

Bisa teman teman liat diatas, type pada di javascript bisa kapan saja di ubah, **ini masalah..?** tentu saja ngak juga sih, akan tetapi misal teman teman bekerja secara team, dan orang lain juga harus menggunakan function yang sudah teman teman buat, ini **akan jadi masalah**, berikut contohnya :
<small>index.js</small>

```javascript
//code yang kamu buat
function sum(a, b) {
  return a + b;
}
```

Saat orang menjalankannya :
<small>index.js</small>

```javascript
//misalkan orang menjalankan
sum(1, 2); // return 3
sum(1, "2"); //return 3
sum("hello" + 1); //return NaN
```

Nah lho.. itu string ditambah number bisa ya? dan string text ditambah angka jadinya tipe data NaN (NOT a NUMBER), **NGAK EROR**, ini tentunya akan jadi masalah, trus gimana dengan typescript
<small>index.ts</small>

```javascript
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2); // return 3
sum(1, "2"); // ERROR..
sum("hello" + 1); //ERROR BRAY...
```

Nah, asik kan, ini sangat membantu, jadi apa yang typescript selesaikan,

- Manual add static type
- Realtime debuging
- 12 Basic Type :
- - Boolean : True dan False
- - String : ya string
- - Number : ya nomer akakak
- - Array : contohnya [1,2,4] atau ["fadli", "depok", "menikah"]
- - Tuple : contohnya [13, "jakarta", true]
- - enum : Outcome {Win, Lose, Draw}
- - any : Dynamic Type seperti javascript
- - void : function yang tidak mereturn
- - null : sesuatu yang belum ada
- - undefined : variable yang belum di assign
- - never : function yang tidak pernah mengembalikan nilai
- - object : non primitive object

## Installasi

untuk menggunakan typescript, silakan buat sebuah project nodejs

```bash
mkdir <Nama Project mu> && cd <Nama Project mu>
npm init -y
npm install --save-dev typescript
```

> --save-dev maksudnya adalah typescript hanya digunakan pasa saat development saja,

Buat sebuah file bernama **index.ts** di dalam vscode, dan mulai coding,
silakan jalankan dengan cara :

```bash
npx tsc *.ts --watch
```

dengan code ini compiler typescript akan automatis berjalan, setiap kita membuat file ts dan save, maka file vanila js juta terbentuk.

Selanjutnya teman teman bisa install _EXTENSI_ untuk vs code, silakan cari dengan nama **TYPESCRIPT and JAVASCRIPT** yang dibuat oleh _MICROSOFT_

silakan buka debuger live pada _vscode_ dengan cara `` CTRL + `  `` lalu arahkan ke tab **PROBLEM** disana akan muncul live debugger apabila code TS kita error.

## Type

ingat , typescript membuat code kita menjadi static type, artinya kita bisa menentukan type dari sebuah variable kita agar lebih mudah saat proses debugging,.

Berikut ini cara untuk menentukan sebuah type data pada sebuah variable

```javascript
let username: String;

username = "fadliselaz"; //ok
username = 31; // error
```

kita juga bisa mendeskripsikan type dengan cara seperti ini:

```javascript
//kita buat dulu type bernama Style
type Style = "center" | "left" | 12;

// pergunakan type style
let font: Style = "center";
font: Style = "flex"; //error, karena tidak ada di type
font: Style = 12; // ok
```

## Interface

interface digunakan untuk membuat type pada sebuah object,

```javascript
interface UserType {
	username : string
	email : string
	age : number
	marriage : boolean
}
```

selanjutnya kita masukan data pada objectnya

```javascript
let userData: UserType = {
  username: "fadliselaz",
  email: "fadliselaz@gmail.com",
  age: 31,
};
```

code di atas tidak error karena type data benar dan semua key / property terisi

```javascript
let userData: UserType = {
  username: "fadliselaz",
  email: "fadliselaz@gmail.com",
  age: "31",
};
```

code diatas **ERROR** karena age mempunyai type number, bukan string

```javascript
let userData: UserType = {
  username: "fadliselaz",
  email: "fadliselaz@gmail.com",
  age: 31,
  address: "depok",
};
```

Code diatas **ERROR** karena address tidak terdaftar pada type _UserType_

lalu, bagai mana misalkan kita mau menambahkan property / key baru pada object tersebut ?

silakan lakukan cara ini :

```javascript
interface UserType {
	username : string
	email : string
	age : number
	marriage : boolean
	[key : string] : any
}
```

code diatas kita menambahkan additional key yang isinya nanti _any_ / data apapun bisa dimasukan kesitu

sekarang code :

```javascript
let userData: UserType = {
  username: "fadliselaz",
  email: "fadliselaz@gmail.com",
  age: 31,
  address: "depok",
};
```

tidak akan error..

## Function

pada vanila kita menulis function dengan cara ini :

```javascript
function bidangTanah(x, y) {
  return x * y;
}

bidangTanah(10, 2); // 20
bidangTanah("10", 2); //%$#!@%*^%$
```

nah dengan typescript, kita akan tentukan value pada parameter kita dengan cara seperti ini

```javascript
function bidangTanah(x: number, y: number): number {
  return x * y;
}

console.log(bidangTanah(10, 2)); //2
```

apabila function kita tidak ada **return** / tidak mengembalikan nilai, maka bisa kita buat function void dengan cara

```javascript
function bidangTanah(x: number, y: number): void {
  console.log(x, y);
}

bidangTanah(2, 10); // 20
```

Selamat belajar..
