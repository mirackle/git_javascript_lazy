var azArr = [
    'A', 'B', 'C', 'D', 'E', 'F', 'J',
    'H', 'I', 'G', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
    ];

function azprint(n) {
  if(n <= 26) return azArr[(n - 1) % 26] || ""; 
  return azArr[Math.floor(n / 26) - 1] + azArr[(n - 1) % 26]; 
}

var logrel = [];
for(var i = 0; i < 54; i ++) {
  logrel[i % 26] = azprint(i + 1);
  if(i > 0 && !((i + 1) % 26)) {
    console.log(logrel);
    logrel.length = 0;
  }
} 
console.log(logrel);

