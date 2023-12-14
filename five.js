let packagetype= "standard" ;

switch (packagetype) {
    case "standard":
        console.log("It will be delivered in next 3-5 day.");
        break;
        case "express":
            console.log("It will be delivered in next 1-2 day.");
        break;
        case "overnight":
            console.log("It will be delivered in overnight.");
        break;

    default:
        break;
}
