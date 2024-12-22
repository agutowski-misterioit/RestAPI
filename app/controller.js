"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.read = exports.create = exports.index = void 0;
const model_1 = require("./model");
const defaultData_1 = require("./defaultData");
const data = new model_1.ModelsArray();
defaultData_1.defaultArray.forEach(da => data.pushToArray(da));
const index = (req, res) => {
    data.getArray();
    res.status(200).json(data.modelsArray);
};
exports.index = index;
const create = (req, res) => {
    data.pushToArray(req.body.dataToPass);
    res.status(200).json({ msg: 'created' });
};
exports.create = create;
const read = async (req, res) => {
    const dataToPass = data.getArray().filter(d => { return d.id == req.params.id; });
    res.status(200).json(dataToPass.length > 0 ? dataToPass[0] : null);
};
exports.read = read;
const update = (req, res) => {
    data.update(req.params.id, req.body.dataToPass);
    res.status(200).json({ msg: 'updated' });
};
exports.update = update;
const destroy = (req, res) => {
    data.destroy(req.params.id);
    res.status(200).json({ msg: 'destroyed' });
};
exports.destroy = destroy;
