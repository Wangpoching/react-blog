import Menu from './Menu'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('Menu Component Login', () => {
  test('Menu should have Login text if logout', () => {
    render(
        <Router>
          <Menu showMenu={true} setShowMenu={jest.fn()}/>
        </Router>)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
  test('Menu click articles should push history /articles', () => {
    render(
        <Router>
          <Menu showMenu={true} setShowMenu={jest.fn()}/>
        </Router>)
    userEvent.click(screen.getByText('Login'))
    expect(window.location.pathname).toBe('/articles')
  })
})



