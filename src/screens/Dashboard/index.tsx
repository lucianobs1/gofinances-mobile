import React from "react";
import { HighlightCard } from "../../components/HIghlightCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards
  } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
              <Photo  source={{ uri: 'https://avatars.githubusercontent.com/u/47507696?v=4'}}/>
              <User>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Luciano</UserName>
              </User>
            </UserInfo>

            <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}
