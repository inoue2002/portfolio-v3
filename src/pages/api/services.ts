import type { NextApiRequest, NextApiResponse } from 'next'

import type { NewsObj } from 'src/types/news'

export default function news(
  req: NextApiRequest,
  res: NextApiResponse<{ news: NewsObj[] }>
) {
  res.status(200).json({ news: [] })
}
