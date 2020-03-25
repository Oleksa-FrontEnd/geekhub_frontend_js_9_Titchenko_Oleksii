import React, {Component} from 'react';
import ArticleCard from './article';
import { PostType } from './types';
import { get_articles_proffessional_blog, ArticlesCategory } from '../../utils/api_utils/articles';

export type ArticleType = {
    data: PostType
}

export type ArticlePropsType = {
    category: ArticlesCategory
}

export const defaultStateValue: PostType = {
    docs: [],
    limit: 0,
    page: 0,
    pages: 0,
    total: 0
}

export class ArticleBlock extends Component<ArticlePropsType, ArticleType>{
    constructor(props: ArticlePropsType) {
        super(props);
        this.state = {
            data: defaultStateValue
        }
        this.getArticles(props.category);
    }


    getArticles(category: ArticlesCategory) {
        get_articles_proffessional_blog(category).then((articles) => {
            if (articles) {
                this.setState({
                    data: articles.data
                })
            }
        })
    }

    render() {
        const { data } = this.state;
        if (data) {
            return (
                <ArticleCard data={data}></ArticleCard>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
