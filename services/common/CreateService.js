exports.CreateService = async (req, model) => {
    try {
        let data = await model.create(req.body);
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", error: error.message };
    }
};

exports.CreateOneJoinTransaction = async (req, parentModel, childModel, joinProp) => {
       // Create Transaction Session
       const session = await mongoose.startSession();

       try{   
           // Begin Transaction
           await session.startTransaction();
   
           // First Database Process
           let Parent=req.body['Parent'];
           let ParentCreation = await parentModel.create([Parent],{ session });
      
           // Second Database Process
           let Childs=req.body['Childs'];
           await Childs.forEach((element) => {
               element[joinProp] =ParentCreation[0]['_id'];
           });
   
           let ChildsCreation = await childModel.insertMany(Childs,{ session });
        
           // Transaction Success
           await session.commitTransaction();
           session.endSession();
   
           return {status: "ok", Parent: ParentCreation,Childs:ChildsCreation}
   
   
       }
       catch (error) {
           // Roll Back Transaction if Fail
           await session.abortTransaction();
           session.endSession();
           return {status: "fail", info: error.message}
       }
}