# Force sensor reading

## About

Seminar paper on the basics of mechanics, presenting a solution to a task named *Force sensor reading*, taken from the book *Elementary Mechanics using Python* by Anders Malthe-Sørenssen.
The solution is implemented in Python and aims to demonstrate fundamental principles of mechanics.

**Task text:**
A small force sensor has been fitted on the surface of a baseball, measuring the force from the bat on the ball.
The recorded force is provided in the file *baseballforce.d*.
The mass of the baseball is *m = 0.145 kg*.

1. Draw a free-body diagram of the baseball.
2. Find the acceleration of the baseball as a function of time.
3. Find the velocity of the baseball as a function of time.
4. What is the velocity of the baseball as it leaves the bat?

The *baseball* directory contains a program that illustrates the path of a baseball's movement using data from a given file.
Data can also be loaded from a local computer.
You can check it at the following [url](http://alas.matf.bg.ac.rs/~mi19168/baseball/).

## Install and Run

**Requirements: Python 3 (numpy, matplotlib)**

1. Clone the repository locally and navigate to the created directory:
    ```sh
    git clone https://github.com/SavaMijailovic/force-sensor-reading.git
    cd force-sensor-reading
    ```

2. Run script:
    ```sh
    python3 main.py
    ```
