var qoute = [
    {
        qoute: "'The best revenge is massive success.'",
        auther: "--Frank Sinatra"
    },
    {
        qoute:"Do not take life too seriously. You will not get out alive.",
        auther:"--Elbert Hubbard"
    },
    {
        qoute: "Resentment is like drinking poison and waiting for your enemies to die.",
        auther: "-Nelson Mandela"
    },



]




function getRandomQuots() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}