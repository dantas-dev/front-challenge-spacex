import { Story, Meta } from '@storybook/react/types-6-0'
import MissionDetails, { MissionDetailsProps } from '.'
import { Container } from 'components/Container'
import mock from './mock'

export default {
  title: 'MissionDetails',
  component: MissionDetails
} as Meta

export const Default: Story<MissionDetailsProps> = (args) => (
  <Container>
    <MissionDetails {...args} />
  </Container>
)

Default.args = mock
