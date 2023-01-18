export const checkRole = (req, res, next) => {
    const role = req.cookies.role
    if(role !== 'admin') {
        return res.status(404).json({message: 'You dont have a access'})
    }
    next()
}