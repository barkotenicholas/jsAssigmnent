function reverseVowels(params) {
    let vowels = 'aeiou';

    let array = params.split('');
    let swapindex= [];
    for (let i = 0; i < array.length; i++) {
        
        if(vowels.includes(array[i].toLowerCase())){
            swapindex.push(i);
        }   
        
    }

    [array[swapindex[0]],array[swapindex[1]]] = [array[swapindex[1]],array[swapindex[0]]];
    return array.join('');
}   

console.log(reverseVowels('HELLO'));

