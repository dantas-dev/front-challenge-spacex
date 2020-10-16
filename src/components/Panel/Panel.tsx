import React from 'react';

import {
  Container,
  PanelImage,
  PanelContent,
  ButtonGroup
} from './PanelStyles';
import AnchorButton from '../AnchorButton';
import { Title, Description } from '../Text';
import logo from '../../images/logo.svg'

interface PanelProps {
  title: string;
  description: string;
  image: string;
  article_link: string | null;
  video_link: string;
}

function Panel({
  title,
  description,
  image,
  article_link,
  video_link,
}: PanelProps) {
  return (
    <Container>
      <PanelImage
        src={image ? image : logo}
        alt={image ? `${title} mission launch` : ""}
        className={image ? '' : 'placeholder'}
      />
      <PanelContent>
        <Title center>{title}</Title>
        <Description>{description}</Description>
        <ButtonGroup>
          {article_link &&
            <AnchorButton href={article_link} target="_blank" rel='noreferrer'>
              Read more
            </AnchorButton>}
          {video_link &&
            <AnchorButton href={video_link} target="_blank" rel='noreferrer'>
              Watch Video
            </AnchorButton>}
        </ButtonGroup>
      </PanelContent>
    </Container> 
  )
}

export default Panel;
