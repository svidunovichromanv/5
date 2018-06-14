
'use strict'
function Person(name) {
   this._name = name;
   this._maritalStatus = false;
}
Person.prototype.getMarry = function(pers) {
    if(pers instanceof Woman && !this._maritalStatus && this instanceof Man){
      this._maritalStatus = true;
      this._wife = pers._name;
      pers._maritalStatus = true;
      pers._husband = this._name;
      console.log("Совет да любовь!!!");
    }else if(pers instanceof Man && !this._maritalStatus && this instanceof Woman){
      this._maritalStatus = true;
      this._husband = pers._name;
      pers._maritalStatus = true;
      pers._wife = this._name;
      console.log("Совет да любовь!!!");
    }else{
      console.log("Окстись, окаянный!!!");
    }
};
Person.prototype.isMarry = function(pers) {
  if(this._wife === pers._name || this._husband === pers._name){
      console.log("Да, мы же их женили");
    }else {
      console.log("Не-а");
    }
};

function Man(name) {
   this.superConstructor.call(this, name);
   this._wife;
}

var f = function() {};
f.prototype = Person.prototype;
Man.prototype = new f();
Man.prototype.constructor = Man;
Man.prototype.super = f.prototype;
Man.prototype.superConstructor = Person;

function Woman(name) {
   this.superConstructor.call(this, name);
   this._husband;
}
var f1 = function() {};
f1.prototype = Person.prototype;
Woman.prototype = new f1();
Woman.prototype.constructor = Woman;
Woman.prototype.super = f1.prototype;
Woman.prototype.superConstructor = Person;


var vitaly = new Man('Vitaly');
var roman = new Man('Roman');
var anna = new Woman('Anna');
var sveta = new Woman('Sveta');

vitaly.getMarry(roman);
anna.getMarry(sveta);
vitaly.getMarry(anna);
roman.getMarry(sveta);
roman.isMarry(anna);
sveta.isMarry(vitaly);
roman.isMarry(sveta);
anna.isMarry(vitaly);






