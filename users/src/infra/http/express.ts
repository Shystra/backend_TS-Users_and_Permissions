import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from '../../main/routes/user.routes';
import { PermissionRoutes } from '../../main/routes/permission.routes';

class ExpressAdapter {
    public app: Application;
    
    constructor(){
        this.app = express();
        this.middlewareInit();
    }

    private middlewareInit(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        const router = express.Router();
        UserRoutes(router);
        PermissionRoutes(router);
        this.app.use('/api', router); // Use um prefixo para suas rotas
    }

    public listen(port: number){
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}

export { ExpressAdapter };
