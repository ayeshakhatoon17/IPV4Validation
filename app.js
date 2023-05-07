import readline from "readline-sync";
import color  from "cli-color";

console.clear()
const pink = color.xterm(212)
const peach =  color.xterm(224)
const blue = color.xterm(153)
const lime = color.xterm(229)



function main(){
    
    let a=[];
    let input = readline.question(pink("Enter your IPv4 address: "))
    let ipv4 = input.split('.')
    ipv4.forEach((input)=>{
        a.push(Number(input))
    })
    if (a.length===4){ 
         ipcheck(a)
    }
            
else{
    console.log(peach("It is not ipv4"))
}  

function ipcheck(a){
    if(a[0]>=0 && a[0]<=127 && a[1]<=255 && a[2]<=255 && a[3]<=255){
        console.log(peach("It is a IPV4 address"))
        console.log(blue("It comes under class A"))
        if(a[ipv4]==10){
            console.log(lime("Private"))
        }
        else{
            console.log(lime("Public"))
        }
}
else if(a[0]>=128 && a[0]<=191 && a[1]<=255 && a[2]<=255 && a[3]<=255){
    console.log(peach("It is a IPV4 address"))
    console.log(blue("It comes under class B"))
    if(a[0]==172 && a[1]>=16 && a[1]<=31){
        console.log(lime("Private"))
    }
    else{
        console.log(lime("Public"))
    }
}
else if(a[0]>=192 && a[0]<=223 && a[1]<=255 && a[2]<=255 && a[3]<=255){
    console.log(peach("It is a IPv4 address"))
    console.log(blue("It comes under class C"))
    if(a[1]==168){
        console.log(lime("Private"))
    }
    else{
        console.log(lime("Public"))
    }
}
else if(a[0]>=224 && a[0]<=239 && a[1]<=255 && a[2]<=255 && a[3]<=255){
    console.log(peach("It is a IPV4 address"))
    console.log(blue("It comes under class D"))
    
}
else if(a[0]>=240 && a[0]<=255 && a[1]<=255 && a[2]<=255 && a[3]<=255){
    console.log(peach("It is a IPV4 address"))
    console.log(blue("It comes underclass E"))
  
}
else{
    console.log(peach("It is not a IPv4 address"))
}
}
}
main()