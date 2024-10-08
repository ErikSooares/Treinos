function Training(dia){
    const training = ["Ombro", "Braço", "Corpo", "Braço", "Costas", "Peito", "Perna"]
    const TreinoDoDia = document.getElementById("TreinoDoDia");

    TreinoDoDia.innerText = training[dia]
}

function getDayAndTraining(){
    const data = new Date()
    const diaDaSemana = document.getElementById("diaDaSemana")

    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    diaDaSemana.innerText = `${dias[data.getDay()]}-feira`

    
    Training(data.getDay())
}

getDayAndTraining()