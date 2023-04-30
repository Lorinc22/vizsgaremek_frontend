# GorillaGo Vizsgaremek Dokumentáció
Fekete Dániel Zsolt – Krity Lőrinc
User Manual

## Frontend-Krity Lőrinc 

### Kezdő oldal (Fooldal.tsx)
Ahogy a felhasználó belép az első oldalra 2 Gomb található, ami közül a felhasználó tud választani, hogy Regisztrálni szeretne vagy ha már van létrehozott fiókja akkor bejelentkezni.

### Regisztráció(Register.tsx)
A második oldal a regisztráció a felhasználónak ki kell tölteni a mezőket a megfelelő kritériumok alapján:
- Az email címben szerepelnie kell @ karakternek
- Foglalt email címmel nem tud regisztrálni
- A jelszónak minimum 8 karakternek kell lennie
- A két jelszónak egyezniük kell

### Bejelentkezés(Login.tsx)
A harmadik oldal a bejelentkezés a felhasználónak ki kell tölteni a beregisztrált adatok szerint az Email és a Jelszó mezőt. Ha a felhasználó elrontja az email vagy a jelszó írását akkor nem engedi be az oldalra és egy Hibaüzenetet dob (Email vagy a jelszó Hibás!).

### Főoldal (HomehomePage.tsx)
Sikeres bejelentkezés esetén a felhasználót átirányítja a Főoldalra.
A főoldalon a felhasználó tud keresni az éttermek között vagy tud választani az ajánlott éttermek közül. Az oldal tetején található egy Navigációs sáv. A Navigációs sávon elhelyezkedik egy kijelentkezés gomb amire kattintva kijelentkezik a felhasználó a fiókból és vissza kerül a Bejelentkezés oldalra. Ha a felhasználó rákattint valamelyik étteremre akkor átirányítja a választott étterem oldalára.

## Étterem oldal (RestaurantPage.tsx)
A felhasználó az oldalon tud válogatni a kívánt ételekből az étterem menüje alapján.
Ha kiválasztotta kívánt ételét akkor kitudja választani, hogy miből hány darabot szeretne venni. A kosárba gomb kattintásával a felhasználó beleteszi az ételeket a kosárba és a Navigációs sáv jobb szélén láthatja, hogy hány darabot rakott be a kosarába. A sávban lévő kosár gomb megnyomásával átirányítja a Kosár oldalára.

## Kosár (Cart.tsx)
A kosár oldalán a felhasználó láthatja, hogy miből mennyi van a kosárba és az összesített fizetendő összeget. Ha a felhasználó még nem rakott semmit a kosárba, akkor az oldal tetején kifogja jelezni, hogy "A kosár üres". A fizetendő összeg alatt a kosár ürítése gombra kattintva a felhasználó kitöröl minden eddigi hozzáadott ételt a kosarából. A kosár ürítése gomb mellett található egy "Tovább" gomb, amire kattintva átirányítja a szállítási adatok kitöltésére.

## Szállítási adatok (DeliveryInformations.tsx)
Az oldalon a felhasználónak ki kell töltenie a megadott mezőket (Település, Utca, Házszám, irányítószám). Ha a felhasználó a megrendelés gombra kattint az adatok kitöltése nélkül, akkor ki jelzi az oldalon egy lenyíló ablakba, hogy mindent kötelező kitölteni. Ha az adatok kitöltése sikeres, a megrendelés gombra kattintva a felhasználó egy "Sikeres rendelés!" üzenetet fog kapni.

## Fiók (Fiok.tsx)
A navigációs sávon a Fiók gombra kattintva a felhasználót átirányítja a Felhasználói adatok oldalra, ahol kitudja tölteni a szükséges adatokat (Vezetéknév, Keresztnév, Telefonszám). A felhasználó az oldalon még megtudja változtatni a fiókjához tartozó jelszavát a régi és az új kiválasztott jelszó használatával. Ha a felhasználó vissza akar menni a fő oldalra, akkor a navigációs sáv bal szélén lévő GorillaGo ikonra kattintva megteheti.

