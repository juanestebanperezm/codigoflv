/**
 * Middleware para añadir un reto
 */
const addChallenge = async (req, res) => {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Sisas todo bien'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el que hizo esta chimbada pa que lo arregle',
            error
        })
    }
}


export {
    addChallenge
}