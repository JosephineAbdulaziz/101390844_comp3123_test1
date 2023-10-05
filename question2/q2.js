const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { "message": "delayed success!" };
            resolve(success);
        }, 500);
    }
    );
}

const rejectedPromise = () => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
           try {
            let error = {"error": "delayed exception!"};
            reject(error)
        }
        catch (e) {
            consol.error(e)

           }
        }, 500);

    }
    );


}

function onSuccess(data) {
    console.log(data);
}
function onError(data) {
    console.log(data);
}



resolvedPromise()
    .then(onSuccess);

rejectedPromise()
    .catch(onError);