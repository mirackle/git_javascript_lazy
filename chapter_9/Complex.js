function Complex(real, imaginary) {
  this.r = real;
  this.i = imaginary;
}

Complex.prototype.add = function(that) {
  return new Complex(this.r + that.r, this.i + that.r);
}

Complex.prototype.mul = function(that) {
  return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
}

Complex.prototype.mag = function() {
  return Math.sqrt(this.r * this.r + this.i * this.i);
}

Complex.prototype.neg = function() {
  return new Complex(-this.r, -this.i);
}

Complex.prototype.toString = function() { return "{" this.r + ","+ this.i+ "}"; }

Complex.prototype.equals = function(that) {
  return that != null &&
    that.constructor === Complex &&
    this.r === that.r && this.i === that.i;
}


http://svn.dev.uboxol.com:8099/svn/avatar/Source/Platform/trunk

//////////////////////////////////////////
A8000F0F00
1100
01
01
06
75140012201409011105017000010001
3000
3E00
0100
75140012
75111001
00
0220
0000000000000000000000000000
06
400120700001
2D000000 // 交易金额
00000000
F7070000 // 卡内余额
20140901110243
996691C2
1600
1000751077509586
7652BC17
24080000 // 交易前余额
01
02
01000000
00
02
1200
00000000
2D000000
003100000001
3030383131303200000000000000000000000000
02000000 // 批次号---TODO
000000
FFFFFFFFFFFFFFFFFFFF7A01FFFF




0B000F0F00 1000 01 0B 99FDFFFF

/////////////////
A8000F0F00
1100
01
01
06
75140012201409011438357000150001
3000
6D00  // 单条记录长度-109
0100  
75140012
75111001
00
0220
0000000000000000000000000000
06   //交易类型
400120700015
2D000000  // 交易金额
41000000
70070000
20140901  // 交易日期
142552    // 交易时间
996691C2
1900
1000751077509586
DA69E989
9D070000  // 交易前余额
01
02
01000000
00
02
1500
60000000
/* 个性化信息 */
2D000000
003100000001
3030383131303200000000000000000000000000
1F000000
000000
FFFFFFFFFFFFFFFFFFFF
223CFFFF