var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
}
var mem = new Member('祥寛', '山田');
document.writeln(mem.getName());
var mem2 = new Member('奈美', '掛谷');
document.writeln(mem2.getName());
