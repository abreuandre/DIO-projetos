/*
Atividade 1: Maps
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função getAdmins que recebe um Map;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de getAdmins, utilize o loop for...0f para retornar uma lista com os nomes dos usuários que são administradores.
*/

/*function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Andre', 'Admin');
usuarios.set('Christiane', 'Admin');
usuarios.set('Adriano', 'User');
usuarios.set('Antonio', 'Admin');

console.log(getAdmins(usuarios));*/

//-------------------------------------------------------------------------------------------------------

/*
Atividade 2: Sets

Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return[...mySet];
}

console.log(valoresUnicos(meuArray));