export function getAllResources(){
    return fetch('/api').then(function(res){
        return res.json();
    })
}

export function getSomeResources(){
    return fetch('/api/:area').then(function(res){
        return res.json();
    })
}