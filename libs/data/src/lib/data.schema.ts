import * as mongoose from 'mongoose';

export const ToDoSchema = new mongoose.Schema(
    {
        name: String,
        dueDate:Date,
        complete:Boolean,
        description:String,
    }
);

export const CropSchema = new mongoose.Schema(
    {
        name:String,
        datePlanted: Date,
        description:String,
        todos:Array,
    }
)
export const GardenBedSchema = new mongoose.Schema(
    {
        name:String,
        description:String,
        crops: Array,
    }
)
export const ZoneSchema = new mongoose.Schema(
    {
    name:String,
    description:String,
    beds:Array
    }
)
export const ActivitySchema = new mongoose.Schema(
    {
        prompt: String,
        response:String,
        complete:Boolean,
    }
)
export const PrincipleSchema = new mongoose.Schema(
    {
        name:String,
        description:String,
        activities: Array
    }
)
export const ProjectSchema = new mongoose.Schema(
    {
    name: String,
    description:String,
    eduCourse: Array,
    garden: Array
    }
)
export const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: [true,'Must provide a username']

        } ,
        password:{
            type:String,
            required: [true,'Must provide a password']
        },
        email:{
            type:String,
            validate: {
                validator: (v:string)=>{
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
                },
            },
            required: [true,'Must provide a valid email']
        },
        firstName:{
            type:String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        projects: Array
    }
)