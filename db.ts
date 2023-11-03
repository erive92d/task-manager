import mongoose, { ConnectOptions } from 'mongoose';



const connect = async () => {

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions; 

  // const uri = process.env.MONGODB_URL
    const uri = process.env.MONGOCOMP_URL

  
  if(!uri) {
    throw new Error("MONGO URI is not defined")
  }

  try {
    await mongoose.connect(uri, options)
    console.log("Mongo connection success!")
    
  } catch (error) {
    throw new Error("Error in connecting to mongodb")
  }
}

export default connect