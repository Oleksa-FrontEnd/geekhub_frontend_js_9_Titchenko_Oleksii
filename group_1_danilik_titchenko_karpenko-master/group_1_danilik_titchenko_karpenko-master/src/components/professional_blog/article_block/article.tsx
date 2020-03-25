import React from 'react';
import { Wrapper } from '../../universal_templates/cards/partials';
import BlockWrapper from '../../universal_templates/blocks/section';
import { PostDocsType, PostType } from './types';
// partials
import { PopularCard, ArticlesTitle, ArticleCards } from './partials';

export default function (props: {
    data: PostType
}) {
    props.data.docs.sort((a: PostDocsType, b: PostDocsType) => {
        return a.viewsCount + b.viewsCount
    })
    return (
        <BlockWrapper indent>
            <ArticlesTitle data={props.data}></ArticlesTitle>
            <Wrapper className="card__grid-wrapper_two">
                <PopularCard data={props.data} />
                <Wrapper className="card__grid-wrapper_four">
                    <ArticleCards data={props.data}></ArticleCards>
                </Wrapper>
            </Wrapper>
        </BlockWrapper>
    )
}
