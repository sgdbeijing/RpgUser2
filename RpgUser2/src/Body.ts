var bodyConfig = [

	{id:"body_0",name:"Smallbody",attack:100,strength:110,agility:120,intelligence:130,endurance:140},
	{id:"body_1",name:"Bigbody",attack:200,strength:210,agility:220,intelligence:230,endurance:240}

]

class BodyProperty extends Property{

	public type = equipmentType.BODY;
	public configId:string = "";
	public name:string = "";
	public basic_Attack:number = 0;
	public basic_Strength:number = 0;
	public basic_Agility:number = 0;
	public basic_Intelligence:number = 0;
	public basic_Endurance:number = 0;

	public constructor(id:string,name:string,attack:number,strength:number,agility:number,intelligence:number,endurance:number){
		super();
		this.configId = id;
		this.name = name;
		this.basic_Attack = attack;
		this.basic_Strength = strength;
		this.basic_Agility = agility;
		this.basic_Intelligence = intelligence;
		this.basic_Endurance = endurance;

	}

	get fightPower():number {

		var result = 0;

		result =  this.basic_Attack + (this.basic_Strength + this.basic_Agility + 
									   this.basic_Intelligence + this.basic_Intelligence) * 0.5;

		return result;

	}


}


class Body extends Equipment{

	public dirtyFlag:boolean = true;
	public property:BodyProperty;
	public gems:Gem[] = [];

	public constructor(type:number) {
		super();

		this.property = new BodyProperty(bodyConfig[type].id,bodyConfig[type].name,bodyConfig[type].attack,bodyConfig[type].strength,
									 bodyConfig[type].agility,bodyConfig[type].intelligence,
									 bodyConfig[type].endurance);

		
	}

	public addGem(gem:Gem):void {
		this.gems.push(gem);
	}

	get fightPower():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.fightPower;
		});
		result += this.property.fightPower;

		return result;
	}

	get attack():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.attack;
		});
		result += this.property.basic_Attack;

		return result;
	}

	get strength():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.strength;
		});
		result += this.property.basic_Strength;

		return result;
	}

	get agility():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.agility;
		});
		result += this.property.basic_Agility;

		return result;
	}

	get intelligence():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.intelligence;
		});
		result += this.property.basic_Intelligence;

		return result;
	}

	get endurance():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.endurance;
		});
		result += this.property.basic_Endurance;

		return result;
	}

}