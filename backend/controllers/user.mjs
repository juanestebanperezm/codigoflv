/**
 * Middleware para añadir un usuario
 */
const addUser = async (req, res) => {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Sisas todo bien'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Habla con el que hizo esta chimbada pa que lo arregle',
            error
        })
    }
}


export {
    addUser
}