angular.module('AppCurriculo').factory('utils',function(){
    const array = {
        chunk
    };

    function chunk(arr, size){
        const result = [];
        for(let i=0 ; i < arr.length; i += size){
            result.push(arr.slice(i,i+size));
        }
        return result
    }

    return utils={
        array
    };

})