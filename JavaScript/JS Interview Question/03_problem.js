// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image 
// of the original. Write a function that appends the reversed version of the original string to itself.

function MirrorString(str) {
  const result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  str2 = result.join('');
  return str+str2
}

const a = "helloji";
console.log(MirrorString(a));

