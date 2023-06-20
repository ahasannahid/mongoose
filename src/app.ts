import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();
// using cors
app.use(cors())


//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// inserting a test data into mongodb
    /**
     * step 1: creating interface
     * step 2: create schema
     * step 3: convert schema to model
     * step 4: create Database query(on model)
     */

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // res.send('Hello World!');
    // next();

    const createUserToDB = async () => {
        //create instance using model
        const user = new User({
            id: '19',
            role: 'student',
            password: 1234,
            name: {
                firstName: 'Ahasan',
                lastName: 'Nahid',
            },
            dateOfBirth: '14-09-1997',
            gender: 'male',
            email: 'ahnahid123@gmail.com',
            contactNo: '01910613458',
            emergencyContactNo: '01568798947',
            presentAddress: 'Mirpur-Dhaka',
            permanentAddress: 'Mymensingh'
        });
        await user.save();
        console.log(user);
    };
    createUserToDB();
});


export default app;

/**
 * pattern MVC, MODULER
 * Breakdown process
 * 1. Interface   (user.interface.ts)
 * 2. Schema and model(user.model.ts)
 * 3. route
 * route function --> API route controller.ts
 * Database Query--> service.ts
 * Service(database logic)
 */