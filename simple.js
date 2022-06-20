console.log("simple_way");


let counetr = 0;

function one() { //function with defintion




    if (counetr > 3) {

        return "done";

    }

    counetr++;

    console.log(counetr)
    return one(); //calling multiple

}

//stack overflow
one() //calling multiple
    // one()


//factorial program using recursion

//iterative approach loop


//factorial  5!=5*4*3*2*1=

//4!=4*3*2*1=24

const iterative = (num) => {

    let ans = 1;


    for (let i = num; i > 0; i--) {

        ans = ans * i;



    }

    console.log(ans)


}


iterative(7)


//pecursive approach


const recursion = (number) => {



    if (number == 2) {

        return 2;
    }
    return number * recursion(number - 1);


}

const ret = recursion(7)

console.log(ret)