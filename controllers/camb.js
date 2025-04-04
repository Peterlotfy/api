import Camb from "../models/Camb.js"

export const createCamb = async (req,res,next)=>{
        const newCamb = new Camb(req.body)
    try {
        const savedCamb = await newCamb.save()
        res.status(200).json(savedCamb)
    } catch (err) {
        next(err)
    }
};

export const updateCamb = async (req,res,next)=>{
try {
        const updateCamb = await Camb.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new:true}
        )
        res.status(200).json(updateCamb)
    } catch (err) {
    next(err)
}
};
export const deleteCamb = async (req,res,next)=>{
    try {
        await Camb.findByIdAndDelete(req.params.id)
        res.status(200).json("camb been deleted")
    } catch (err) {
    next(err)
}
};
export const getCamb = async (req,res,next)=>{
    try {
        const camb = await Camb.findById(req.params.id)
        res.status(200).json(camb)
    } catch (err) {
    next(err)
}
};
export const getCambs = async (req,res,next)=>{
    try {
        const cambs = await Camb.find();
        res.status(200).json(cambs)
    } catch (err) {
    next(err)
}
};
export const countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Camb.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
    next(err)
}
};export const countByType = async (req,res,next) => {
        try {
    const cambCount = await Camb.countDocuments({type:"camb"});
    const apartimntCount = await Camb.countDocuments({type:"restor"});
    const restorCount = await Camb.countDocuments({type:"villa"});
    const villaCount = await Camb.countDocuments({ type: "villa" });
    const CabinCount = await Camb.countDocuments({type:"cabin"});
    res.status(200).json([
        {type:"camb",count: cambCount},
        {type:"apartments",count: apartimntCount },
        {type:"resorts",count: restorCount },
        {type:"villas",count: villaCount },
        {type:"cabins",count: CabinCount },
    ])
    } catch (err) {
    next(err)
}
};