/*Un estudiante desea saber cual será su calificación final en la materia de Algoritmos. 
Dicha calificación se compone de los siguientes porcentajes:

55% del promedio de sus tres calificaciones parciales
30% de la calificación del examen final
15% de la calificación de un trabajo final */

let nota1,nota2,nota3,promedio,porcenprom;
let examfinal,porcenexam;
let trabfinal,porcentrab;
let califinal=0;

nota1 = Number(prompt(`Calificacion final
Ingrese las tres notas de parciales
Nota 1: `));
nota2 = Number(prompt(`Nota 2:`));
nota3 = Number(prompt(`Nota 3:`));
promedio = (nota1+nota2+nota3)/3;
porcenprom = parseFloat(promedio*0.55);

examfinal = Number (prompt(`Ingrese la nota del examen final:`));
porcenexam = parseFloat(examfinal*0.3);

trabfinal = Number(prompt(`Ingrese la nota del trabajo final:`));
porcentrab = parseFloat(trabfinal*0.15);

califinal= parseFloat(porcenprom+porcenexam+porcentrab);

alert(`La nota final de los parciales es de: ${porcenprom}
La nota del examen final fue de: ${porcenexam}
La nota del trabajo final es de: ${porcentrab}
Su calificacion final es de: ${califinal}`);