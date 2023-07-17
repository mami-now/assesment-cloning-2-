/*const integerPartitions = n => {
  const countPartitions = (n, k) => {
    if (n === 0) return 1;
    if (n < 0 || k === 0) return 0;
    return countPartitions(n, k - 1) + countPartitions(n - k, k);
  };

  return countPartitions(n, n);
};

// Example usage
const result = integerPartitions(100);
console.log(result);

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
console.log(result)
for(let age of ages){
  console.log(ages[7])
}const ages=[30,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
ages.forEach(function(age){
  return age*2
})
console.log(ages);
const x=10 ;
const color= x > 9 ? 'red':'blue';
console.log(color);

*/
 function polygonType(l,w){
  if(l==w){
    return l*w;
  }
  else{
    return 2*(l+ w);
  }
}
polygonType(3,3);
