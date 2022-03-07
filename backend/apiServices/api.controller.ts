import { Request, Response } from "express"
export const helloWorld = async (req: Request, res: Response) => {
	try {
		res.status(200).send('Hello World!')
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Hable aca",
			error
		})
	}
}
