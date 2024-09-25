function Training(dia){
    const training = ["Ombro", "Braço", "Corpo", "Braço", "Costas", "Peito", "Perna"]
    const TreinoDoDia = document.getElementById("TreinoDoDia");

    TreinoDoDia.innerText = training[dia]
}

function getDayAndTraining(){
    const data = new Date()
    const dias = document.getElementById("dias")
    const diaAtual = dias.children

    diaAtual[data.getDay()].style.cssText = "border-color: black; color: black;"
    console.log(data.getDay())
    console.log(diaAtual[data.getDay()])

    Training(data.getDay())
}

getDayAndTraining()