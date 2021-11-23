let baseurl = 


window.onload = function(){
    console.log('loadad')
    // get value from imputfieeld 
    //...
    //build url
    let url = baseurl + 't=parasite';
    getData(url).then(result => {
        console.log(return);
    });
};



async function getData(url){
    let response = away fetch(url);
    return await response.json();
}

//199ec968