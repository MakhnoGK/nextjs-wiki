import { Router } from 'express';
import slugify from 'slugify';

import Article from 'models/Article';

const router = Router();

router.get('/:articleId', async (req, res) => {
    try {
        const articles = await Article.findAll();

        return res.json(articles);
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
