var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  // instance.total = 0;

  instance.startQ = 0;
  instance.endQ = 0;
  return instance;

};

// var queueMethods = Object.create(Queue.prototype);
var queueMethods = {};
queueMethods.size = function(){
  return this.endQ - this.startQ;
};

queueMethods.enqueue = function(value){
  this[this.endQ] = value;
  this.endQ++;
};

queueMethods.dequeue = function(){
  if (this.endQ - this.startQ > 0){
    var temp = this[this.startQ];
    delete this[this.startQ];
    this.startQ++;
  }
  return temp;
};



