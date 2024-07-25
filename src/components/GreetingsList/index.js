import {Component} from 'react'

import GreetingsTabItem from '../GreetingsTabItem'
import './index.css'

class GreetingsList extends Component {
  state = {activeTab: 'English'}

  onChangeTab = tab => {
    this.setState({activeTab: tab})
  }

  getFilteredLanguage = languageGreetingsList => {
    const {activeTab} = this.state
    const filteredLanguage = languageGreetingsList.filter(
      eachLanguage => activeTab === eachLanguage.buttonText,
    )
    return filteredLanguage[0]
  }

  render() {
    const {activeTab} = this.state
    const {languageGreetingsList} = this.props
    const filteredLanguage = this.getFilteredLanguage(languageGreetingsList)
    console.log(filteredLanguage)

    return (
      <div className="greetings-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="greetings-tab-list">
          {languageGreetingsList.map(eachTabList => (
            <GreetingsTabItem
              tabDetails={eachTabList}
              key={eachTabList.id}
              onChangeTab={this.onChangeTab}
              isActive={activeTab === eachTabList.buttonText}
            />
          ))}
        </ul>
        <div className="greeting-language">
          <img
            src={filteredLanguage.imageUrl}
            alt={filteredLanguage.imageAltText}
            className="filter-image"
          />
        </div>
      </div>
    )
  }
}

export default GreetingsList
