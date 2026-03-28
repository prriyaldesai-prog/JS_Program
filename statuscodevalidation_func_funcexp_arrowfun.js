function validatestatuscode(status) {
    if (status >= 200 && status <= 299) {
        console.log("success")
    }
}


const validatestatuscode1 = function (status) {
    if (status >= 200 && status <= 299) {
        console.log("success")
    }
}

const validatestatuscode2 = (status) => {
    if (status >= 200 && status <= 299) {
        console.log("success")
    }
}

validatestatuscode(201);
validatestatuscode1(200);
validatestatuscode2(201);
