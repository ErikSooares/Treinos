const listaDeTreinos = [
    {
        id: "Perna",
        treinos: ["Agachamento", "Leg press", "Cadeira flexora", "Flexora em pé", "Mesa flexora", "Cadeira flexora", "Panturrilha sentado", "Panturrilha em pé", "Panturrilha em pé (Livre - 100 rep)"]
    },
    {
        id: "Ombro",
        treinos: [""]
    },
    {
        id: "Braço",
        treinos: ["Triceps testa na polia", "Rosca direta", "Triceps Pulley (Barra e Corda)", "Rosca Scott", "Triceps francês na polia", "Rosca 45°"]
    },
    {
        id: "Corpo",
        treinos: [""]
    },
    {
        id: "Glúteo",
        treinos: ["Leg press (Pés mais altos)", "Agachamento", "Elevação pélvica", "Cadeira abdultora"]
    },
    {
        id: "Costas",
        treinos: ["Remada serrote", "Remada fechada", "Pulley frente", "Crucifixo inverso", "Remada Curvada", "Remada aberta", "Remada baixa barra"]
    },
    {
        id: "Peito",
        treinos: [""]
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
                console.log(listaDeTreinos[i].treinos[j])

                const elements = document.createElement("div");
                elements.className = "treinosDoDia";
    
                // Insere o elemento criado dentro do DashBoardTreinos
                DashBoardTreinos.appendChild(elements);
            }
        }
    }
    
}

function getDayAndTraining() {
    const data = new Date()
    const diaDaSemana = document.getElementById("diaDaSemana")

    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    diaDaSemana.innerText = `${dias[data.getDay()]}-feira`


    Training(data.getDay())
}

getDayAndTraining()