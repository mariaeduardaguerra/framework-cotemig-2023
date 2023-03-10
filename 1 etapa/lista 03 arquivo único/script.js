function questao01()
{
    // Crie 2 arrays numéricos com dados sendo preenchidos pelo usuário, utilizando o push para popular,
    // concatene os mesmos, exclua o maior e menor valor, ao final exiba:
    // 1) Os dois arrays originais preenchidos,
    // 2) O array concatenado ;
    // 3) O array concatenado sem o maior e menor valores.

    let array01 = [];
    let array02 = [];
    x = 0;

    /*for (x = 0; x <= 3; x++)
    {
    array01[x] = parseInt(prompt("digite um número:"));
    array02[x] = parseInt(prompt("digite outro número:"));                
    }*/

    while (x <= 3) {
        array01.push(parseInt(prompt("digite um número:")));
        array02.push(parseInt(prompt("digite outro número:")));
        x++;
    }

    // concatenar

    let arrayNum = array01.concat(array02);
    console.log(array01, array02);
    console.log(arrayNum);

    // ordem crescente

    arrayNum.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    // excluir maior e menor

    arrayNum.shift();
    arrayNum.pop();

    console.log(arrayNum);
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao02()
{
    // Verifique se no vetor concatenado da atividade anterior existe um determinado número informado pelo usuário:
    // Ex: VetConcatenado = [5, 205, 30, 50, 65, 16]
    // Valor digitado pelo usuário: 27
    // Resposta: Valor não existe no vetConcatenado.

    let vetConcatenado = [5, 205, 30, 50, 65, 16];
    let valorUsuario = 0;

    vetConcatenado.push(parseInt(prompt("digite um número:")));
    x++;

    if ((valorUsuario = 27)) {
        console.log(print("este valor não existe no vetor!"));
    } else {
        console.log(print("este valor existe no vetor!"));
    }
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao03()
{
    // Criar uma função que receba como parâmetro um array de 10 números e retorne
    // um array contendo o dobro de cada elemento. Dica: Utilize o método map().

    let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // vetor original

    let dobro = arrayNum.map(function (item) {
        return item * 2; // retorna o item original * 2
    });

    console.log(dobro); // imprime os resultados
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao04()
{
    // Imagine a situação onde você tem uma lista de produtos e precisa extrair apenas o id de cada um.
    // const produtos = [
    // { id: 1, categoria: 'limpeza', name: 'Amaciante' },
    // { id: 2, categoria: 'limpeza', name: 'Detergente' },
    // { id: 3, categoria: 'alimento', name: 'ovo' },
    // { id: 4, categoria: 'alimento', name: 'alface' },
    // ]
    // Utilize o método map(), para retornar um array contendo somente os ids.

    const produtos = [
        { id: 1, categoria: "limpeza", nome: "amaciante" },
        { id: 2, categoria: "limpeza", nome: "detergente" },
        { id: 3, categoria: "alimento", nome: "ovo" },
        { id: 4, categoria: "alimento", nome: "alface" },
    ];

    let arrayRetornaId = [];

    produtos.map((produtos) => {
        arrayRetornaId.push(produtos.id);
    });

    console.log(arrayRetornaId);
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao05()
{
    // Utilize o mesmo array de produtos da atividade 4, mas dessa vez, você só quer que fique no array
    // os produtos com a categoria “alimento”: Faça um filtro utilizando o método filter() para retornar o
    // array dos produtos da categoria “alimento”.

    const produtos = [
        { id: 1, categoria: "limpeza", nome: "amaciante" },
        { id: 2, categoria: "limpeza", nome: "detergente" },
        { id: 3, categoria: "alimento", nome: "ovo" },
        { id: 4, categoria: "alimento", nome: "alface" },
    ];

    let categoriaAlimento = produtos.filter(
        (produtos) => produtos.categoria == "alimento"
    );

    console.log(categoriaAlimento);
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao06()
{
    // Agora você irá utilizar os métodos map() e filter() em conjunto.
    // Imagine que você quer os ids dos produtos, mas somente dos alimentos:

    const produtos = [
        { id: 1, categoria: "limpeza", nome: "amaciante" },
        { id: 2, categoria: "limpeza", nome: "detergente" },
        { id: 3, categoria: "alimento", nome: "ovo" },
        { id: 4, categoria: "alimento", nome: "alface" },
    ];

    var categoriaAlimento = produtos.filter(
        (produtos) => produtos.categoria == "alimento"
    );

    console.log(categoriaAlimento);

    var arrayRetornaId = [];

    categoriaAlimento.map((categoriaAlimento) => {
        arrayRetornaId.push(categoriaAlimento.id);
    });

    console.log(arrayRetornaId);
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao07()
{
    // Crie um array de objetos produtos com nome e preço, agora você irá adicionar um
    // desconto de 10% no preço desses produtos, utilize o método map() e object.keys().
    let produtos = [
        {
        nome: "passatempo",
        preco: 3.5,
        },

        {
        nome: "toddynho",
        preco: 2.3,
        },

        {
        nome: "nescau",
        preco: 10.2,
        },
    ];

    console.log(Object.keys(produtos));

    let desconto = [];

    produtos.map((produtos) => {
        desconto.push(produtos.preco);
    });

    desconto = desconto.map((x) => x - x * 0.1);

    console.log(desconto);
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao08()
{
    // Dado o array abaixo que armazena os funcionários de uma empresa.
    // Const funcionários = [{
    //   Nome: 'Han Solo',
    //   Departamento: 'Financeiro',
    //   Salario: 5000
    // }, {
    //   Nome: 'Luke',
    //   Departamento: 'Financeiro',
    //   Salario: 15000
    // }, {
    //   Nome: 'Ben',
    //   Departamento: 'Marketing',
    //   Salario: 2000
    // }, {
    //   Nome: 'Leia',
    //   Departamento: 'Marketing',
    //   Salario: 10000
    // }, {
    //   Nome: 'Rey',
    //   Departamento: 'Financeiro',
    //   Salario: 2500
    // }]

    // Faça um scprit que retorne o valor que o Departamento Financeiro iria receber ao todo se déssemos 50% de aumento para eles. Para saber essa informação, nós precisaríamos:
    // 1) filtrar do array quais são os funcionários do Departamento Financeiro,
    // 2) adicionar 50% de aumento em seus salários e
    // 3) fazer a somatória total desses salários.

    const funcionarios = [
        {
        nome: "han solo",
        departamento: "financeiro",
        salario: 5000,
        },

        {
        nome: "luke",
        departamento: "financeiro",
        salario: 15000,
        },

        {
        nome: "ben",
        departamento: "marketing",
        salario: 2000,
        },

        {
        nome: "leia",
        departamento: "marketing",
        salario: 10000,
        },

        {
        nome: "rey",
        departamento: "financeiro",
        salario: 2500,
        },
    ];

    let filtroFinanceiro = funcionarios.filter(
        (funcionarios) => funcionarios.departamento == "financeiro"
    );

    console.log(filtroFinanceiro);

    let salarioFinanceiro = [];

    filtroFinanceiro.map((filtroFinanceiro) => {
        salarioFinanceiro.push(filtroFinanceiro.salario);
    });

    console.log(salarioFinanceiro);

    let aumento = salarioFinanceiro.map((x) => x + x / 2);

    console.log("o salário novo do departamento financeiro será -> " + aumento);
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao09()
{
    // Dado o código abaixo , informe o que está sendo executado em cada linha e informe a saída final.
    // function verifica(arr) {
    // let resultado = arr.map(function(num) {
    // let maior = 0;
    // for(let i=0;i<num.length; i++) {
    // if (num[i] > maior) {
    // maior = num[i];
    // }
    // }
    // return maior;
    // });
    // return resultado;
    // }
    // verifica([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

    let resultado = arr.map(function (num) {
        // crição da função de verificar
        let maior = 0;

        for (
        let i = 0;
        i < num.length;
        i++ // confere o índice e passa para o próximo até acabar o "length"
        ) {
        if (num[i] > maior) {
            maior = num[i];
        }
        }

        return maior;
    });

    return resultado;
}

    verifica([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


function questao10()
{
    // Crie um array misto com números positivos e negativos(informados pelo usuário, enquanto ele quiser inserir dados)
    // e verifique e identifique quais são os elementos negativos e quantos desses elementos você encontrou.
    // Ex: Array = [11, -4, 6, -3, 12, 1, 8, -7, -10]
    // Saída: [-4,-3,-7,-10]
    // Quantidade: 4 itens.

    let numeros = [];
    let verdadeiro = true;

    while (verdadeiro == true) {
        let digitarNum = prompt(
        "digite números negativos e positivos da sua escolha. digite >PARE< para parar."
        );

        if (digitarNum == "PARE") {
        verdadeiro = false;
        } else {
        numeros.push(parseInt(digitarNum));
        }
    }

    console.log(numeros);

    let negativos = numeros.filter((x) => x < 0);

    if (negativos == "") {
        console.log("números negativos não foram digitados!");
    } else {
        console.log(negativos);
    }
}
