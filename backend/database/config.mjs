import mongoose from 'mongoose';

/**
 * Función para establecer la conexión a la base de datos
 */
const main = async () => {
    try {
        await mongoose.connect(process.env.DB_KEY_CNN);
        console.log('Conexión exitosa con la base de datos...');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error inicializando la base de datos....');
    }
}

export default main;