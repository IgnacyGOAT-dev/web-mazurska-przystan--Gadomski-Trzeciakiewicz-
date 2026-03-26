# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Ignacy Gadomski/Jakub Trzeciakiewicz
**Klasa:** 3 Technikum
**Data:** 19/03/2026

---
## 1. Analiza wymagań klienta
* Formularz zawierający następujące pola:
- Imie
- Typ Łodzi
- Ilość Godzin
- Kapok
- Instruktor
- Forma Płatności
- Akceptacja regulaminu

* Na bazie powyższego formularza powinna być obliczana i wyświetlana cena wynajęcia łodzi.

---
## 2. Architektura rozwiązania
* Aplikacja tej skali nie wymaga znacznej ilości plików. Jeden jest wystarczający.
* Backend w pełni zawarty jest w funkcji App(), zawierającej inne funkcje wymagane do działania formularza, oraz zwracającej tsx

---
## 3. Zarządzanie stanem (`useState`)
| Nazwa zmiennej stanu | Typ danych | Za co odpowiada?                                      |
| :------------------- | :--------- | :---------------------------------------------------- |
| `name`               | `string`   | Przechowuje imię klienta wpisane w formularzu         |
| `boat`               | `string`   | Przechowuje wybrany typ łodzi do wynajęcia            |
| `hour`               | `number`   | Przechowuje liczbę godzin wynajmu wybraną suwakiem    |
| `kapok`              | `boolean`  | Określa, czy klient wybrał kapok dla dziecka          |
| `instructor`         | `boolean`  | Określa, czy klient wybrał opiekę instruktora         |
| `payment`            | `string`   | Przechowuje wybraną metodę płatności (karta lub BLIK) |

---
## 4. Algorytm obliczania ceny
* instruktor i kapok to wartości prawda fałsz. Zakładamy że są warte albo 1 (prawda), albo 0 (fałsz)
* cenaŁodzi to 20, 35 lub 150 w zależności od wybranej łodzi.
* cenaFinalna = (godziny * (cenaŁodzi + 50*instruktor)) + 5*kapok
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display: ...` - (opis zastosowania)
2. `...` - (opis zastosowania)
3. `...` - (opis zastosowania)
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** Tabela w markdownie
* **Czego nowego się nauczyliście?** Ignacy: Jak działa UseState, oraz jak się robi tabele w markdownie
* **Co byście zmienili, gdybyście mieli więcej czasu?** Dodałbym zmienną do akceptacji regulaminu.
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [ ] Pull Requesty zostały zaakceptowane przez partnera.