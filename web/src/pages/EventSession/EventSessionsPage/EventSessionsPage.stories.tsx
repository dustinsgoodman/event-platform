import type { Meta, StoryObj } from '@storybook/react'

import EventSessionsPage from './EventSessionsPage'

const meta: Meta<typeof EventSessionsPage> = {
  component: EventSessionsPage,
}

export default meta

type Story = StoryObj<typeof EventSessionsPage>

export const Primary: Story = {}
