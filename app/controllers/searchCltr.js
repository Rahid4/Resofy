const searchCltr={}

export const getBySearch=async(req,res,next)=>{
    try{
        const limit=parseInt(req.query.limit)||'10';
        const startIndex=parseInt(req.query.startIndex)||0;
        const order=req.query.order||'desc';
        



    }
    catch(e){
        next(e)
    }

}