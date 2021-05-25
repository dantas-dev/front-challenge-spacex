import { Story, Meta } from '@storybook/react/types-6-0'
import LaunchCard, { LaunchCardProps } from '.'

export default {
  title: 'LaunchCard',
  component: LaunchCard
} as Meta

export const Default: Story<LaunchCardProps> = (args) => (
  <LaunchCard {...args} />
)

Default.args = {
  mission_name: 'Starlink-15 (v1.0)',
  mission_link: 'https://www.google.com.br',
  launch_date_local: '2020-10-24T11:31:00-04:00'
}
