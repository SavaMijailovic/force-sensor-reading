# Seminarski rad iz osnova mehanike

_Zadatak preuzet iz knjige: Elementary Mechanics Using Python, Anders Malthe-Sørenssen._

### Tekst zadatka

Očitavanja senzora sile. Izmerena je sila kojom palica deluje na lopticu pri udarcu (izmerene vrednosti
su prikazane u fajlu _baseballforce.d_). Loptica je mase _m = 0.145kg_.

1. Nacrtati shemu sila koje deluju na ovu lopticu.
2. Naći ubrzanje loptice u funkciji vremena.
3. Naći brzinu loptice u funkciji vremena.
4. Koja je brzina loptice u trenutku kada napusti palicu?

U direktorijumu _baseball_ se nalazi program koji opisuje putanju kretanja
loptice koristeći podatke iz datog fajla, a mogu se učitati i podaci sa lokalnog računara.
Animaciju možete pogledati na sledećem [linku](http://alas.math.rs/~mi19168/baseball).


# Seminar paper on the basics of mechanics

_Task taken from the book: Elementary mechanics using Python, Anders Malthe-Sørenssen._

### Task text

Force sensor reading. A small force sensor has been fitted on the surface of a
baseball, measuring the force from the bat on the ball. 
The recorded force is shown in the file _baseballforce.d_. 
The mass of the baseball is _m = 0.145kg_.

1. Draw a free-body diagram of the baseball.
2. Find the acceleration of the baseball as a function of time.
3. Find the velocity of the baseball as a function of time.
4. What is the velocity of the baseball as it leaves the bat?

The _baseball_ directory contains a program that describes the path of movement
baseball using data from a given file, and data can also be loaded from a local computer. 
You can watch the animation at the following [url](http://alas.math.rs/~mi19168/baseball).

## :package: Run
:exclamation: Requirements: python (numpy, matplotlib)

1. Clone repository somewhere on your machine

    ```sh
    git clone https://github.com/SavaMijailovic/force-sensor-reading.git
    ```
    ```sh
    cd force-sensor-reading
    ```
2. Run script

    ```sh
    python3 main.py

    ```
