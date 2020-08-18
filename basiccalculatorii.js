//Objective is similar to 'Basic Calculator', except no '()'. However, we do
//implement '*' and '/'. We truncate the decimal for division.

let s = " 3+5 / 2 "


//O(n) solution that uses a stack to keep track of the previous operator

s.replace(/\s/g, '')
    
let stack = []
let prevSign = '+'
let num = ''

for (let i = 0; i < s.length; i++) {
    
    //If it's an integer
    if (!isNaN(s[i])) {
        num += s[i]
    }
    
    if (isNaN(s[i]) || i == s.length - 1) {
        
        //We don't operate on '+' and '-' since '*' and '/' take priority
        if (prevSign == '+') {
            stack.push(Number(num))
        } else if (prevSign == '-') {
            stack.push(Number(-num))
        } else if (prevSign == '*') {
            stack.push(Number(num) * stack.pop())
        } else if (prevSign == '/') {
            stack.push(Math.trunc(stack.pop() / Number(num)))
        }
        prevSign = s[i]
        num = ''
    }
}

return stack.reduce((cur, sum) => cur + sum)