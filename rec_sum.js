var num=window.prompt("enter the number");

function recsum(num) {
    var s=0;
    temp=num
    while(temp>0){
        rem=temp%10;
        s=s+rem;
        temp=Math.floor(temp/10);
        
    }
    if(s>10){
        recsum(s);
    }
    else{   
        console.log(s) ;
    }
}
recsum(num);
