let a = 2;
a = a - 1;
a++;
console.log(`resultat de a: ${a}`);

let b = 8;
b += 2;
console.log(`resultat de b: ${b}`);

let c = a + b * b;
console.log(`resultat de c: ${c}`);

let d = a * b + b;
console.log(`resultat de d: ${d}`);

let e = a * (b + b);
console.log(`resultat de e: ${e}`);

let f = a * b / a;
console.log(`resultat de f: ${f}`);

let g = b / a * a;
console.log(`resultat de g: ${g}`);


document.write(`<p>a = ${a}</p>`);

document.write(`<p>b = ${b}</p>`);

document.write(`<p>c = ${c}</p>`);

document.write(`<p>d = ${d}</p>`);

document.write(`<p>e = ${e}</p>`);

document.write(`<p>f = ${f}</p>`);

document.write(`<p>g = ${g}</p>`);
