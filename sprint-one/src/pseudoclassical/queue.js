var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.startQ = 0;
  this.endQ = 0;


};

Queue.prototype.size = function(){
  return this.endQ - this.startQ;
};

Queue.prototype.enqueue = function(value){
  this[this.endQ] = value;
  this.endQ++;
};

Queue.prototype.dequeue = function(){
  if (this.endQ - this.startQ > 0){
    var temp = this[this.startQ];
    delete this[this.startQ];
    this.startQ++;
  }
  return temp;
};



