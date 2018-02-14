(function(){
    String.prototype.isPermutation = function(str){
        return this.split('').sort().join('') == str.split('').sort().join('');
    }
    "qwerty".isPermutation("wertqy");
}())
