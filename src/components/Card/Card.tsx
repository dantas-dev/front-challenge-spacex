import React from 'react';

import formatDate from '../../utils/formatDate';

import { Container } from './CardStyles';
import { Title, ClampedDescription, Date } from '../Text';

interface CardProps {
  title: string;
  description: string;
  date: number;
}

function Card({
  title,
  description,
  date,
}: CardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <ClampedDescription>{description}</ClampedDescription>
      <Date>{formatDate(date)}</Date>
    </Container> 
  )
}

export default Card;
