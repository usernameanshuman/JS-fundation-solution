
const arr =[1, 2, 999, 56, "Miyhum", 1234, "pw" ];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        console.log("Found the first string:" +arr[i]); 
        break;
    }
    
}