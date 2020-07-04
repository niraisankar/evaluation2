var n=window.prompt("enter n");
var m =window.prompt("enter m");
function breakchocolate(m,n){
    if(m&&n !=0){
        if((m>n)||(m==n)){
            max=m;
        }
        else{
            max=n;
        }
    return max-1;
    }
    else{
        return 0;
    }
}
console.log(breakchocolate(n,m));


