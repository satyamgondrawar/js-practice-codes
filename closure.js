//A fuction that remember variables from its outer scope even after that outer function
//has finished executing
//Allow data privacy and persistant state


function outer(){
    let count=0;
    return function inner(){
         count++;
         console.log(count)
    }
}
outer()
outer()
outer()
outer()