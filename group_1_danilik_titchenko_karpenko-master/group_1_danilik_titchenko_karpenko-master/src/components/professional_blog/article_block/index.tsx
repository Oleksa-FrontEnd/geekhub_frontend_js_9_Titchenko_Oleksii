import React from 'react';
import Section from '../../universal_templates/blocks/section';
import {ArticleBlock} from '../../../components/professional_blog/article_block/article_section';
import { ArticlesCategory } from '../../../components/utils/api_utils/articles';

export default function () {
    return (
        <Section>
            <ArticleBlock category={ArticlesCategory.POPULAR}></ArticleBlock>
            <ArticleBlock category={ArticlesCategory.ESSENTIALS}></ArticleBlock>
            <ArticleBlock category={ArticlesCategory.FREELANCE}></ArticleBlock>
        </Section>
    )
}