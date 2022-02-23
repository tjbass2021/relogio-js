const OPTIONS = {
    hour: '2-digit',
    minute: '2-digit'
};

let minute = new Date().getMinutes();
let minuteControl = new Date().getMinutes();
let hour = new Date().toLocaleTimeString('pt-BR', OPTIONS);

console.log(hour);

while (true){

    minute = new Date().getMinutes();

    if (minute - minuteControl === 1){

        hour = new Date().toLocaleTimeString('pt-BR', OPTIONS);

        console.log(hour);

        minuteControl++

    }else if(minute === 0 && minuteControl === 59){
        
        minuteControl = new Date().getMinutes();

        hour = new Date().toLocaleTimeString('pt-BR', OPTIONS);
    
        console.log(hour);

    }
}