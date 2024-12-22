export class Model {
    id: number;
    ean: number;
    name: string;
    model: string;
    size: string;
    price: number;
    quantity: number;

    constructor({model}){
        this.id = model.id;
        this.ean = model.ean;
        this.name = model.name;
        this.model = model.model;
        this.size = model.size;
        this.price = model.price;
        this.quantity = model.quantity;
    }
}

export class ModelsArray {
    modelsArray: Array<Model>;
    lastId: number;
    constructor(){
        this.modelsArray = [];
        this.lastId = 1;
    }

    getArray = () => {
        return this.modelsArray;   
    }
    pushToArray = (item: Model) => {
        item.id = this.lastId;
        this.modelsArray.push(item);
        this.lastId++;
    }
    update = (id, object) => {
        const index = this.modelsArray.findIndex(obj =>obj.id == id);
        this.modelsArray[index] = object;
    }
    destroy = (id) => {
        this.modelsArray.splice(this.modelsArray.findIndex((i) => {
            return i.id == id;
        }), 1);
    }
}