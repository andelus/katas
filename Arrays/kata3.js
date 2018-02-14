(function(){
    /**
     * Check if a given number is odd.
     * @return {Boolean}
     */
    Number.prototype.isOdd = function(){
        return this % 2 !== 0;
    }
    /**
     * Find if a String is a permutaion of a palindrome
     * @param  {String} str
     * @return {Boolean}
     */
    function palindromePerms(str){
        /**
         * Lower case and trim spaces
         */
        str = str.toLowerCase().replace(' ','');
        var isPalindromPerm = false; // Return Variable
        var strArr = str.split(''); // To array
        var strLength = strArr.length; // Length
        var strHash = {}; // HashTables keeping count of letters
        var count = {}; count.twos = 0; count.ones = 0; // Object to keep count of the occurences of Twos and Ones

        /**
         * Build the hashtable
         */
        strArr.forEach((char, index) => {
          if(!strHash[char]) strHash[char] = 0;
          strHash[char]++;
        });

        /**
        * Count how many twos and ones there is in the hash table
        */
        for(var char in strHash) {
          if(strHash[char] === 2){
            count.twos++;
          }
          if(strHash[char] === 1){
            count.ones++;
          }
        }

        /**
         *  1- If odd, the string must have a letter of one and only one occurence. And the others
         *  repeated twice for it to be a palindrome.
         *  2- If even, all letters should be repeated twice for it to be a palindrome.
         */
        if(strLength.isOdd()){
          if(count.ones === 1){
            isPalindromPerm = true
          }
        }else{
          if(count.ones === 0){
            isPalindromPerm = true
          }
        }
        return isPalindromPerm;

    }
}())
