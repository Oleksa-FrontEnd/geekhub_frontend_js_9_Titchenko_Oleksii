import React from 'react';
import BlockWrapper from '../../../universal_templates/blocks/section';
import { Author, Body, Title, Wrapper, ListWrapper, Image } from '../../../universal_templates/cards/partials';
import Card from '../../../universal_templates/cards';
import { PostType } from '../../article_block/types';

export default function (props: {
    data: PostType,
    limit: number
}) {
    return (
        <BlockWrapper className = "block__element_indent-bottom">
            <Wrapper className="card__grid-wrapper_two">
                {
                    props.data.docs.map((article, index) => {
                        if (index < props.limit) {
                            return (
                                <Card key={index} className="card_shadow  card__flex-wrapper_column card__flex-wrapper">
                                    <ListWrapper key={article._id}>
                                        <Image src={article.featuredImage} alt={article.slug}></Image>
                                        <Author>By {article.author} in {article.tags[0]}</Author>
                                        <Title>{article.title}</Title>
                                        <Body>{article.description}</Body>
                                    </ListWrapper>
                                </Card>
                            )
                        } else {
                            return null
                        }
                    })
                }
            </Wrapper>
        </BlockWrapper>
    )
}