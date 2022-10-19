

var arr = [];
document.getElementById("result").innerHTML = arr;

function addNumber(){

var number = +(document.getElementById("num").value);

if(isNaN(number) || number == "" || Number.isInteger(number) === false){
    // number = "Vui lòng nhập số nguyên";
    number = alert("Vui lòng nhập số nguyên");
}

arr.push(number);
document.getElementById("result").innerHTML = (arr);
}


// console.log("--------Bài 1--------");

function ex1(){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i]>0){
            sum += arr[i];
        }
    }
    document.getElementById("result1").innerHTML = sum;
}

// console.log("--------Bài 2--------");

function ex2(){
    var count = 0;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i]>0){
            count++;
        }
    }
    document.getElementById("result2").innerHTML = count;
}

// console.log("--------Bài 3--------");

function ex3(){
    var min = arr[0];
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i]<min){
            min = arr[i];
        }
    }
    
    document.getElementById("result3").innerHTML = min;
}

// console.log("--------Bài 4--------");

function ex4(){

    var plusMin = arr[0];
    
    for (var i = 0; i < arr.length; i++){

        if (arr[i] > 0 && (arr[i] < plusMin || plusMin < 0)){
            plusMin = arr[i];
        }
        
    }
    document.getElementById("result4").innerHTML = plusMin;
}

// console.log("--------Bài 5--------");

function ex5(){
    
    for (var i = arr.length - 1; i >=0; i--){

        if (arr[i] % 2 === 0){
            document.getElementById("result5").innerHTML = arr[i];
            return;
        }
    }
    document.getElementById("result5").innerHTML = -1; 
}

// console.log("--------Bài 6--------");



function ex6() {
    var position1 = +(document.getElementById("num2").value);
    var position2 = +(document.getElementById("num3").value);
    var temp = "";

        temp = arr[position1];
        arr[position1] = arr[position2];
        arr[position2] = temp;
    
    document.getElementById("result6").innerHTML = arr;
}


// console.log("--------Bài 7--------");
function ex7(){

    var temp = arr[0];

    for (k = 0; k < arr.length-1; k++ ){
        for( i = k + 1; i < arr.length; i++){
            if (arr[k] > arr[i]){
                temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
       
    }
    
    document.getElementById("result7").innerHTML = arr;
}

// console.log("--------Bài 8--------");

function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    var flag = 1;

    if (n <2) {
        return flag = 0;} /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    var i = 2;
    while(i < n){
        if( n%i === 0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

function ex8(){

    /*Tìm và liệt kê các số nguyên tố trong mảng*/
    for (var i = 0; i < arr.length; i++){
    if (isprime(arr[i]) === 1){
        document.getElementById("result8").innerHTML = arr[i];
        break;
    } else{
        document.getElementById("result8").innerHTML = -1;
    }
  }
    
}

// console.log("--------Bài 9--------");
var arr11 = [];
document.getElementById("result11").innerHTML = arr11;

function addNumber11(){

var number11 = +(document.getElementById("num11").value);

if(isNaN(number11) || number11 == ""){
    number11 = "Vui lòng nhập số";
}

arr11.push(number11);
document.getElementById("result11").innerHTML = arr11;
}

function ex9(){

    var count3 = "";

    for (var i = 0; i < arr11.length; i++){
        if (Number.isInteger(arr11[i]) === true){
            count3++;
        }
    }
    document.getElementById("result9").innerHTML = count3;
}

// console.log("--------Bài 10--------");
function ex10(){

    var count1 = 0;
    var count2 = 0;
    var compare ="";
        for (var i = 0; i < arr.length; i++){
            if (arr[i]>0){
                count1++;
            }else if(arr[i]<0){
                count2++
            }
        }

        if(count1>count2){
            compare = "số dương > số âm";
        }else if(count1<count2){
            compare = "số dương < số âm";
        }else{
            compare = "số dương = số âm";
        }
    
    document.getElementById("result10").innerHTML = compare;
}