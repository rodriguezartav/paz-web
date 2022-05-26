import GuideItems from "../../helpers/guideItems";

export default async function handler(req, res) {
  const guideItems = GuideItems({}, req.headers);
  const items = await guideItems.getAll();

  res.status(200).json(items);
}
