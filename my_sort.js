var method = {
    //冒泡方式
    bubble: function(callback){
        for(var i=0;i<arr.length;i++){
            for(var j=i+1;j<arr.length;j++){
                if(callback(arr[i], arr[j])===true || callback(arr[i], arr[j])>0){
                    var t = arr[i];
                    arr[i] = arr[j];
                    arr[j] = t;
                }
            }
        }
    }

}
function choose(){
    var arr = this;
    if(arr.length<1000){
        return method['bubble']
    }
    
}
function mySort(callback){
    var arr = this;
    var fun = choose.bind(this)();
    fun(callback)
    
}
Array.prototype.mySort = mySort;

var arr = [1,2,3,2]
arr.mySort(function(a,b){return b-a})
console.log(arr)