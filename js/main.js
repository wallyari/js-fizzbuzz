let boxesArea = document.getElementById("boxes-area");


for(let i = 1; i <= 100; i++){

    let box = document.createElement("div");
    box.classList.add("box");
    boxesArea.append(box);

    if(i%3 == 0 && i%5 == 0){
        box.innerHTML = "FizzBuzz";
        box.classList.add("my-blue","text-white");

    }
    else if(i%3 == 0){
        box.innerHTML = "Fizz";
        box.classList.add("my-green");
    }

    else if(i%5 == 0){
        box.innerHTML = "Buzz";
        box.classList.add("my-pink");
    }

    else{
        box.innerHTML = i;
    }
}
