import React, { Component } from 'react'
import { Checkbox } from 'vtex.styleguide'

class SportsInterest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sportsInterest: [],
      error: null,
    }
  }

  componentDidMount() {
    this.props.registerValidator(this.validate)
    this.props.registerSubmitter(this.submit)
  }

  onChange = (sport, isChecked) => {
    const { sportsInterest } = this.state
    let updatedSports

    if (isChecked) {
      updatedSports = [...sportsInterest, sport]
    } else {
      updatedSports = sportsInterest.filter(s => s !== sport)
    }

    this.setState({ sportsInterest: updatedSports })
    console.log('updatedSports', updatedSports)
  }

  validate = () => {
    const { sportsInterest } = this.state
    this.setState({ error: null })
    if (sportsInterest.length === 0) {
      this.setState({ error: 'Escolha no mínimo uma opção' })
      return false
    }
    return true
  }

  submit = () => {
    console.log('Success! Your information is saved.')
  }

  render() {
    const { error, sportsInterest } = this.state
    return (
      <div className="mb8">
        <p className="vtex-input__label db mb3 w-100 f6">Quais esportes você mais se interessa?</p>
        <div className="f6 mb2">
          <Checkbox
            id="futebol"
            label="futebol"
            checked={sportsInterest.includes('futebol')}
            onChange={e => this.onChange('futebol', e.target.checked)}
          />
        </div>
        <div className="f6 mb2">
          <Checkbox
            id="futsal"
            label="futsal"
            checked={sportsInterest.includes('futsal')}
            onChange={e => this.onChange('futsal', e.target.checked)}
          />
        </div>
        <div className="f6 mb2">
          <Checkbox
            id="basquete"
            label="basquete"
            checked={sportsInterest.includes('basquete')}
            onChange={e => this.onChange('basquete', e.target.checked)}
          />
        </div>
        <div className="f6 mb2">
          <Checkbox
            id="volei"
            label="volei"
            checked={sportsInterest.includes('volei')}
            onChange={e => this.onChange('volei', e.target.checked)}
          />
        </div>
        {error && <div className="c-danger">{error}</div>}
      </div>
    )
  }
}

export default SportsInterest
