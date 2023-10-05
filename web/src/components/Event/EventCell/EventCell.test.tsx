import { render, screen } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './EventCell'
import { standard } from './EventCell.mock'

describe('EventCell', () => {
  test('Loading renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  test('Empty renders successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  test('Failure renders successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  test('Success renders successfully', async () => {
    const event = standard().event
    render(<Success event={event} />)

    expect(screen.getByText(event.name)).toBeInTheDocument();
  })
})
