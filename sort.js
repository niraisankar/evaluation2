let i=0;
var s=window.prompt("enter the number of elements")
var arr=[];
var output="";
while(i<s){
    arr[i]=window.prompt("enter number");
    i++;
}
for(let i=0;i<s;++i){
    for(let j=i+1;j<s;++j){
        if(arr[i]<arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
for(i=0;i<s;i++){
    console.log(arr[i]);
    output+=arr[i]+"  ";
}
alert(output);