import { Router, Request } from 'express';
import slugify from 'slugify';

import Article from 'models/Article';

const router = Router();

interface IReqiestWithProps<T> extends Omit<Request, 'body'> {
    body: T;
};

router.get('/', async (_req, res) => {
    try {
        const articles = await Article.findAll();

        return res.status(200).json(articles);
    } catch (error) {
        res.status(500).end();
    }
});

router.get('/:slug', async (req: IReqiestWithProps<{ slug: string }>, res) => {
    try {
        const article = await Article.findOne({ where: { slug: req.body.slug } });

        return res.json(article);
    } catch (error) {
        console.error(error);

        return res.end();
    }
});

router.post('/', async (req, res) => {
    try {
        await Article.create({ title: "This is as dflja ljasdljasljd", slug: slugify('lkajsd ljkdkjasd askdjdf KAKAJF'), content: {"h1": "THis isi sa  random lailkasdjflaiuoiasdhf"} });
        return res.status(200).end();
    } catch (error) {
        console.error(error);

        return res.end();
    }
});

export default router;
