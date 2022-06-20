console.log("fibbonaci apporch")


//loop approach fibbonaci


function two(t) {


    let arr_1 = [0, 1];

    let sum = 0;

    for (let j = 0; j < t; j++) {


        sum = arr_1[j] + arr_1[j + 1]; //0 + 1



        arr_1.push(sum); //[0 , 1 , 1]
    }

    console.log(arr_1)

}



two(20)






//recursice approach fibbonaci

//0, 1, 1, 2, 3, 5, 8, 13

function three(r) {


    if (r < 2) {

        return 1;
    }

    return three(r - 1) + three(r - 2);



}


const io = three(6)

console.log(io)