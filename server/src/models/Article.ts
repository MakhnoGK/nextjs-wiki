import database from 'database';
import { DataTypes, Model } from 'sequelize';

class Article extends Model {}

Article.init(
    {
        title: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.JSON
        }
    },
    { sequelize: database }
);

export default Article;
