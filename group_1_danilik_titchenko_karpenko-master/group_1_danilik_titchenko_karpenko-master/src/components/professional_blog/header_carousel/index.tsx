import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import HeaderCarousel from './block';
import { ArticlesCategory } from '../../utils/api_utils/articles';
import Section from '../../universal_templates/blocks/section';

export default function () {
    return (
        <Section className = "block__header_wrapper">
            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
                <HeaderCarousel category={ArticlesCategory.ESSENTIALS} />
                <HeaderCarousel category={ArticlesCategory.FREELANCE} />
                <HeaderCarousel category={ArticlesCategory.POPULAR} />
            </Carousel>
        </Section>
    )
}