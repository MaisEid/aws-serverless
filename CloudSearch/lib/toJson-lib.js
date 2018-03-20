
export function call(data) {
    var listOfObject = []; var i = 0;
    while (i < data.hits.hit.length) {
        var obj = JSON.parse(JSON.stringify(data.hits.hit[i].fields).replace(/[\[\]']+/g, ''));
        listOfObject.push(obj);
        i++;
    }
    return listOfObject ;
}
