(function(){
    /**
     * Extending The String Object
     * And Using HashTables To Determin If All Letters Are Coutned Once.
     * @return {Boolean} isUnique
     */
    String.prototype.isUnique = function(){
        let strArr = this.split('');
        let strHashArr = {};
        return strArr.every(char => {
            if(!strHashArr[char]) strHashArr[char] = 0;
            strHashArr[char]++
            if(strHashArr[char] > 1){
                return false
            }else{
                return true
            }
        });
    }

    let str = "qwy";
    /**
     * -----------------------------------------------------------
     * Testing If A String Is Unique But Without Any Data Structure Trick
     * Using Regular Expression
     * @return {Boolean} isUnique
     */
    function isUnique(str){
        return !(/(\w).*?\1/i).test(str);
    }
    isUnique(str)
}())
