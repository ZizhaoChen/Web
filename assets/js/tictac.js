
for (var i=0;i<100;i++){
    if(i%3==0&&i%5!=0){
        console.log("Tic");
    }
    if(i%3!=0&&i%5==0){
        console.log("Tac");
    }
    if(i%3!=0&&i%5!=0){
        console.log(i);
    }
    if(i%3==0&&i%5==0){
        console.log("TicTac");
    }
}
