const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://alas.math.rs/~mi19168/baseball/baseballforce.json');
xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        DATA = JSON.parse(xhr.response);
        console.log(DATA);
    }
});
xhr.send();

let DATA;
let F = [];
let T = [];
let R = [];

function setData() {
    F = [];
    T = [];
    for (const data of DATA) {
        T.push(data[0]);
        F.push(data[1]);
    }
}

// const m = 0.0008;
// const g = 400000; 

const m = 0.00075;
const g = 400000;

const startx = 40;
const starty = 60;

let x = startx;
let y = starty;

let fileChosen = false;

const ball = document.getElementById('ball');

function hit(angle) {
    angle *= (Math.PI / 180);
    const dt = T[1] - T[0];
    let A = [], V = [], DT = [];
    let r = [startx, starty], v = [0, 0], a = [0, 0];
    let counter = 0;
    let t = 0;

    while (r[1] > 0) {
        if (counter < F.length) {
            const _a = F[counter] / m;
            a = [_a * Math.cos(angle), _a * Math.sin(angle) - g];
            A.push(a);
        } else {
            a = [0, -g];
        }

        v = [v[0] + a[0] * dt, v[1] + a[1] * dt];
        r = [r[0] + v[0] * dt, r[1] + v[1] * dt];

        V.push(v);
        R.push(r)
        DT.push(t);
        t += dt;
        counter++;
    }
    i = 0;
    interval = setInterval(move, dt);
}

let interval = 0;
let i = 0;

function move() {
    if (i >= R.length) {
        clearInterval(interval);
        interval = 0;
        return;
    }
    x = R[i][0];
    y = R[i][1];
    ball.style.left = x + 'px';
    ball.style.bottom = y + 'px';
    i++;
}

function main() {
    setData();

    const inputfile = document.getElementById('inputfile');
    if (inputfile != null) {
        inputfile.addEventListener('input', function () {
            fileChosen = false;
            const fr = new FileReader();
            fr.addEventListener('load', function () {
                parseFile(fr.result);
            });
            if (inputfile.files.length > 0) {
                fr.readAsText(inputfile.files[0]);
            }
        });
    }

    const angle = document.getElementById('angle');
    if (angle == null) return;
    angle.onchange = function () {
        const a = Number.parseInt(angle.value);
        if (Number.isNaN(a) || a < 0 || a > 90) {
            angle.value = 45;
        }
    }

    const start = document.getElementById('start');
    if (start == null) return;
    start.addEventListener('click', function () {
        checkFileInput();
        if (fileChosen && this.value != 'Reset') {
            this.value = 'Reset';
            hit(angle.value);
        }
        else {
            this.value = 'Start';
            R = [];
            if (interval != 0) {
                clearInterval(interval);
                interval = 0;
            }
            x = startx;
            y = starty;
            ball.style.left = x + 'px';
            ball.style.bottom = y + 'px';
        }
    });
}

function checkFileInput() {
    const err = document.getElementById('error');
    if (err != null) {
        if (fileChosen) {
            err.style.visibility = 'hidden';
        } else {
            err.style.visibility = 'visible';
            if (F.length == 0 || T.length == 0) {
                setData();
            }
        }
    }
}

function parseFile(result) {
    const all = result.split(' ');
    let time = true;
    F = [];
    T = [];
    for (const x of all) {
        const n = Number.parseFloat(x);
        if (!Number.isNaN(n)) {
            if (time) {
                T.push(n);
            } else {
                F.push(n);
            }
            time = !time;
        }
    }
    fileChosen = F.length > 0 && F.length == T.length;
    checkFileInput();
}

main();