"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsArray = exports.Model = void 0;
class Model {
    constructor({ model }) {
        this.id = model.id;
        this.ean = model.ean;
        this.name = model.name;
        this.model = model.model;
        this.size = model.size;
        this.price = model.price;
        this.quantity = model.quantity;
    }
}
exports.Model = Model;
class ModelsArray {
    constructor() {
        this.getArray = () => {
            return this.modelsArray;
        };
        this.pushToArray = (item) => {
            item.id = this.lastId;
            this.modelsArray.push(item);
            this.lastId++;
        };
        this.update = (id, object) => {
            const index = this.modelsArray.findIndex(obj => obj.id == id);
            this.modelsArray[index] = object;
        };
        this.destroy = (id) => {
            this.modelsArray.splice(this.modelsArray.findIndex((i) => {
                return i.id == id;
            }), 1);
        };
        this.modelsArray = [];
        this.lastId = 1;
    }
}
exports.ModelsArray = ModelsArray;
