const listaDeTreinos = [
    {
        id: "Perna",
        treinos: ["Agachamento hack", "Leg press", "Cadeira extensora", "Cadeira flexora", "Flexora em pé", "Mesa flexora", "Panturrilha sentado", "Panturrilha em pé", "Panturrilha em pé (Livre - 100 rep)"]
    },
    {
        id: "Ombro",
        treinos: ["Desenvolvimento", "Elevação frontal", "Elevação lateral", "Elevação lateral na polia"]
    },
    {
        id: "Braço",
        treinos: ["Triceps testa na polia", "Rosca direta", "Triceps Pulley (Barra e Corda)", "Rosca Scott", "Triceps francês na polia", "Rosca 45°"]
    },
    {
        id: "Corpo",
        treinos: ["Triceps testa na polia", "Rosca Scott", "Leg press", "Panturrilha em pé", "Remada fechada", "Remada aberta", "Supino"]
    },
    {
        id: "Glúteo",
        treinos: ["Leg press (Pés mais altos)", "Agachamento hack", "Elevação pélvica", "Cadeira abdultora"]
    },
    {
        id: "Costas",
        treinos: ["Remada serrote", "Remada fechada", "Pulley frente", "Crucifixo inverso", "Remada Curvada", "Remada aberta", "Remada baixa barra"]
    },
    {
        id: "Peito",
        treinos: ["Supino reto", "Supino inclinado", "Cruxifixo máquina", "Crossover"]
    }
]

function Training(dia) {
    const training = ["Perna", "Ombro", "Braço", "Corpo", "Glúteo", "Costas", "Peito"]
    const TreinoDoDia = document.getElementById("TreinoDoDia");

    TreinoDoDia.innerText = training[dia]
    //Inserindo os treinos no dashboard
    const DashBoardTreinos = document.getElementById("ListaDeTreinosDoDia");

    for (let i = 0; i < listaDeTreinos.length; i++) {
        if (listaDeTreinos[i].id == training[dia]) {
            for(let j = 0; j < listaDeTreinos[i].treinos.length; j++){
                const elements = document.createElement("div");
                elements.className = "treinosDoDia";
                elements.innerHTML = `<img src="Images/${listaDeTreinos[i].treinos[j].replace(/ /g, '%20')}.jpg" alt=""> <div class='nomeDoTreinoERepetições'> <h1 class='NomeDoTreinoEmCadaLista'>${listaDeTreinos[i].treinos[j]}</h1> <h1>4x6</h1> </div>`;
    
                // Insere o elemento criado dentro do DashBoardTreinos
                DashBoardTreinos.appendChild(elements);
                console.log(listaDeTreinos[i].treinos[j])

            }
        }
    }
    
}

function getDayAndTraining() {
    const data = new Date()
    const diaDaSemana = document.getElementById("diaDaSemana")

    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    diaDaSemana.innerText = `${dias[data.getDay()]}`


    Training(data.getDay())
}

getDayAndTraining()