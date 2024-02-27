function countConsonant(str) {
    //"arnab"
    let count=0;
    let a=["a","e","i","o","u"];
    let call=prompt("Enter your sentence :")
  //here i is the index, str[i] is the character at that index
    for(let i=0; i<str.length; i++) {
        if(!a.includes(str[i]))
        {
         count++;
        }
    }
    console.log(count);
}