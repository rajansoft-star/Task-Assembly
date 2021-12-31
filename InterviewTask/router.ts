import  { Router, Request, Response} from "express";
import { Getmusium } from "./api/task.controller";

 const router =Router()
 router.get('/visitors',async (req: Request, res: Response) => 
{

    return await Getmusium(req,res);
});

export = router;