import express, { Application} from 'express'
import cors from 'cors';
const app: Application = express();

//Application routes
import userRoute from './app/modules/user/user.route'

// using cors
app.use(cors())

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.get('/api/v1/user', userRoute);
app.use('/api/v1/user', userRoute);

export default app;

// inserting a test data into mongodb
    /**
     * step 1: creating interface
     * step 2: create schema
     * step 3: convert schema to model
     * step 4: create Database query(on model)--> model er upor database query hoy
     */

/**Architedcture pattern
 * pattern MVC, MODULER
 * Breakdown process
 * 1. Interface   (user.interface.ts)
 * 2. Schema and model(user.model.ts)
 * 3. route
 * route function --> API route controller.ts
 * Database Query--> service.ts
 * Service(database logic)
 */