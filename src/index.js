module.exports = function check(str, bracketsConfig) {
  const open = []
  const close = {};

  for (let i in bracketsConfig) {
    open.push(...bracketsConfig[i][0]);
    close[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];
  for (let item in str) {
    const top = stack[stack.length - 1];
    const current = str[item];
  
    if (open.includes(current)) {
      if (close[current] !== current || current !== top) stack.push(current);
       else stack.pop();
      
    } else {
      if (stack.length === 0) return false;

      if (close[current] === top) stack.pop();
        else return false;
    }
  }

  return stack.length === 0;
}