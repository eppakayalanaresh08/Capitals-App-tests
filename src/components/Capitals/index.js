import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    inputCapital: countryAndCapitalsList[0].id,
  }

  onClickChangeCapital = event => {
    this.setState({inputCapital: event.target.value})
  }

  getCountry = () => {
    const {inputCapital} = this.state
    const getCountryCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === inputCapital,
    )
    return getCountryCapital.country
  }

  render() {
    const {inputCapital} = this.state
    const country = this.getCountry(inputCapital)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-capital">Countries And Capitals</h1>
          <div className="country-container">
            <select
              value={inputCapital}
              className="select-capital"
              onChange={this.onClickChangeCapital}
            >
              {countryAndCapitalsList.map(eachAndCapital => (
                <option
                  value={eachAndCapital.id}
                  className="option-capital"
                  key={eachAndCapital.id}
                >
                  {eachAndCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description-country">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
