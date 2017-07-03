import React from 'react'

export default class ThemedDecorations extends React.Component {
  render () {
    const kids = React.Children.map(this.props.children, child => {
      return (
        <p className={this.props.theme}>{child}</p>
      )
    })

    return (
      <div className="themed-decorations">
        {kids}
      </div>
    )
  }
}
