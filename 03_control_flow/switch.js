//switch is the alternative for the if case 
//syntax 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//example
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febrary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Juned");
        break;
    default:
        console.log("No Match Found");
        break;
}

//Note :
// it can use to match any type of string,int,etc.
//also for comparsion datatype and value also get check like ===
//if we not give break at the end of the case then all statement excute except defalut