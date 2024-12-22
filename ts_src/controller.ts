import { ModelsArray } from './model';

import { defaultArray } from './defaultData';

const data = new ModelsArray();
defaultArray.forEach(da => data.pushToArray(da));

export const index = (req,res) => {
    data.getArray();
    res.status(200).json(data.modelsArray);
}

export const create = (req,res) => {
    data.pushToArray(req.body.dataToPass);
    res.status(200).json({msg:'created'});
}

export const read = async(req,res) => {
    const dataToPass = data.getArray().filter(d => {return d.id == req.params.id});
    res.status(200).json(dataToPass.length > 0 ? dataToPass[0] : null);
}

export const update = (req,res) => {
    data.update(req.params.id, req.body.dataToPass);
    res.status(200).json({msg:'updated'});
}

export const destroy = (req,res) => {
    data.destroy(req.params.id);
    res.status(200).json({msg:'destroyed'});
}