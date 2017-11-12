// Code your solutions in this file
function printBadges(arrayNames) {
  arrayNames = ["Avi", "Grace", "Alan"]

  for (let i = 0; i < arrayNames.length; i++) {
  console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`);
  }
  return arrayNames;
}
