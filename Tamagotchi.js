

class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 10;
        this._thirst = 5;
        this._weight = 2;
        this._age = 0;
        this._mood = 0;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._hunger;
    }
    get weight(){
        return this._weight;
    }
    get age(){
        return this._age;
    }
    get mood(){
        return this._mood;
    }
    eat(){
        this._hunger += 10;
        this._weight += 5;
        this._mood++;
    }
    drink(){
        this._thirst += 10;
        this._weight += 5;
        this._mood++;
    }
    play(){
        this._mood += 10;
        this._weight--;
        this._hunger--;
        this._thirst--;
    }
}

class Dino extends Animal{
    super(name);
    
}
