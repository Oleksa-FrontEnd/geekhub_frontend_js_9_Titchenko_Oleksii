import React from 'react';
import { Header, Author, Body, Title, Wrapper, ListWrapper } from '../../universal_templates/cards/partials';
import Card from '../../universal_templates/cards';
import ViewAllButton from './view_all_button';
import { PostDocsType, PostType } from './types';
import { Link } from 'react-router-dom';

export function PopularCard(props: {
    data: PostType,
    className?: string
}) {
    const class_name: string = "card_shadow card_bg-blue card__flex-wrapper_column card__flex-wrapper_column-around card__flex-wrapper text_color-white";
    if(props.data){
        return (
            <>
                {
                    props.data.docs.map((article: PostDocsType, index: number) => {
                        if (index === 0) {
                            return (
                                <Card key={index} className={
                                    props.className ? `${class_name} ${props.className}` : class_name
                                }>
                                    <ListWrapper key={article._id}>
                                        <Author>By {article.author} in {article.tags[0]}</Author>
                                        <Title>{article.title}</Title>
                                        <Body>{article.description}</Body>
                                    </ListWrapper>
                                </Card>
                            )
                        }
                        else {
                            return null
                        }
                    })
                }
            </>
        )
    }else{
        return <div></div>
    }
}

export function ArticlesTitle(props: {
    data: PostType,
    href?: string
}) {
    return (
        <>
            {
                props.data.docs.map((article, index) => {
                    if (index === 0) {
                        return (
                            <Wrapper key={index} className="card__flex-wrapper_row card__flex-wrapper">
                                <Title>{article.category[0]}</Title>
                                <ViewAllButton href={
                                    props.href? props.href : "#"
                                } />
                            </Wrapper>
                        )
                    }
                    else {
                        return null
                    }
                })
            }
        </>
    )
}

export function ArticleCards(props: {
    data: PostType
}) {
    return (
        <>
            {
                props.data.docs.map((article, index) => {
                    if (index > 0) {
                        return (
                            <Wrapper key={index}>
                                <ListWrapper key={article._id}>
                                    <Card className="card_shadow">
                                        <Header>
                                            <Link
                                                to="#"
                                                className="button_element button_element_color-gray">
                                                {article.tags[0]}
                                            </Link>
                                        </Header>
                                        <Body className="button_element button_element_color-black button_element_hover">{article.description}</Body>
                                    </Card>
                                </ListWrapper>
                            </Wrapper>
                        )
                    } else {
                        return null
                    }
                })
            }
        </>
    )
}