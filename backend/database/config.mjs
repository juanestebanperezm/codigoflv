import mongoose from 'mongoose';

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/social_network');
        console.log('Conexión exitosa con la base de datos...');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error inicializando la base de datos....');
    }
}

export default main;