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

    let str = "qwerty";
    console.log(str.isUnique());
}())
