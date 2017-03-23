import React from 'react'
import LeftNavMenuItem from './LeftNavMenuItem'
import '../../styles/components/left-nav.css'
class LeftNav extends React.Component {
  static MenuItem = LeftNavMenuItem

  render () {
    return (
      <nav className='nav__left ' {...this.props}>
        {this.props.children}
      </nav>
    )
  }
}

LeftNav.defaultProps = {

}

LeftNav.propTypes = {

}

export default LeftNav
