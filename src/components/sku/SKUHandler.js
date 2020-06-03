function GetSKUs() {
    return fetch("http://localhost:555/skus").then((resp) => resp.json())
}
function CreateSKus(postData){
    var req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(postData)
    }
    return fetch("http://localhost:555/skus",req).then(resp => resp.json())

}
export {GetSKUs , CreateSKus} 
