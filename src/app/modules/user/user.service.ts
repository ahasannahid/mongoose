import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> => {
    //create instance using model
    const user = await new User(payload);
    
    await user.save();
    // console.log(user);
    return user;
};

export const getUsersFromDB = async(): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getUserbyIdFromDB = async(payload:string):Promise<IUser | null> => {
    const user = await User.findOne({id:payload}, {name: 1, email:1});
    return user;
}


