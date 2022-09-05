// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}

const baseString = 'https://www.dnd5eapi.co/api/ability-scores/'
const subStrings = ['str', 'dex', 'con', 'int', 'wis', 'cha']

const fetchApiData = async (): Promise<Data> => {
	const response = await fetch(`${baseString + subStrings[0]}`)
	const data = await response.json()
	return { name: data.name }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: 'John Doe' })
}
