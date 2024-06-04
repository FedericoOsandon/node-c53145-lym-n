import { RouterClass } from "./router.js";

export default class SessionRouter extends RouterClass {
    init(){
        this.get('/', ['PUBLIC'], async (req, res) => {
            try {
                const ressponse = 'hola coder'
                res.sendSuccess(ressponse)                
            } catch (error) {
                res.sendServerError(error)
            }
        })
    }
}