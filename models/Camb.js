import mongoose from 'mongoose';
const CambSchema = new mongoose.Schema ({
name:{
    type: String,
    required: true
},
type:{
    type: String,
    required: false
},
city:{
    type: String,
    required: false
},
address:{
    type: String,
    required: false
},
distance:{
    type: String,
    required: false
},
photos:{
    type: [String],
    required: false
},
title:{
    type: String,
    required: true
},
desc:{
    type: String,
    required: true
},
rooms:{
    type: [String],
},
featured:{
    type: Boolean,
    default: false
},
cheapestPrice: {
type: Number,
required: false,
}
});

export default mongoose.model("Camb",CambSchema);
