import express, { Application } from 'express'
import cors from 'cors';

class ExpressAdapter {
    private app: Application;
    constructor(){
        this.app = express();
        this.middlewareInit();
    }

    private middlewareInit(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true })) //localhost:3000/?name=Jhon%20
    }

    public listen(port: number){
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}

export { ExpressAdapter };
