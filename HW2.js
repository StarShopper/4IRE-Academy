alert("Fibonacci Sequence");

function FibonSeqNeg(firstNum, secNum, n) {
    if (n == 0) {
        return alert(`Okay, let's try again`)
    } else {
        let F1 = firstNum;
        let F2 = secNum;
        let F3;

        for (let i = 2; i < n; i++) {
            F3 = F1 - F2;
            F1 = F2;
            F2 = F3
        }
        return F3;
    }
}


function FibonSeqPos(firstNum, secNum, n) {
    if (n === 1) {
        return firstNum;
    } else if (n === 2) {
        return secNum;
    } else {
        let F1 = firstNum;
        let F2 = secNum;
        let F3;

        for (let i = 0; i < n; i++) {
            F3 = F1 + F2;
            F1 = F2;
            F2 = F3
        }
        return F3
    }
}

let firstNum = +prompt('Enter first num from Fibonacci seq.: (F1)', "");
while (firstNum || isNaN(firstNum) || firstNum == "") {
    firstNum = +prompt("try again", "");
}

let secNum = +prompt('Enter second num from Fibonacci seq.: (F2)', "");
while (secNum || isNaN(secNum) || secNum == "") {
    secNum = +prompt("try again", "");
}

let n = +prompt('Enter num from Fibonacci seq.: (n)', "");
while (n || isNaN(n) || n == "") {
    n = +prompt("try again", "");
}

if (firstNum > 0 && secNum > 0){
    alert(`Your Positive Figonacci seq, value is: ${FibonSeqPos(firstNum, secNum, n)}`);
} else{
    alert(`Your Negative Figonacci seq, value is: ${FibonSeqNeg(firstNum, secNum, n)}`);
}