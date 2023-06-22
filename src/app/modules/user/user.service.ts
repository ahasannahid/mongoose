import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> => {
    // when we create a new user instance method applicable
    //create instance using model
    const user = new User(payload);  //User -> class; user-> instance
    
    await user.save();  //built in instance method . custom instance methods
    // console.log(user);
    console.log(user.fullName());
    return user;
};

export const getUsersFromDB = async(): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getUserbyIdFromDB = async(payload:string):Promise<IUser | null> => {
    const user = await User.findOne({id:payload}, {name: 1, email:1}); //fill filtering
    return user;
};

export const getAdminUsersFromDB = async() => {
    //static class er sathy attached hoye jay
    // return null;
    const admins = await User.getAdminUsers();
    return admins;
};
/**
 * // class -> attach -> method -> directly call using class => static method
//user = new User
// user.   instance method
// User.getAdminusers()->method name ==>> static method
*/






