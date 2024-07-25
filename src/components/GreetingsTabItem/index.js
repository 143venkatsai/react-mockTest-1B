import './index.css'

const GreetingsTabItem = props => {
  const {tabDetails, isActive, onChangeTab} = props
  const {buttonText} = tabDetails
  const buttonClassName = isActive ? 'active' : ''

  const onClickTab = () => {
    onChangeTab(buttonText)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${buttonClassName}`}
        onClick={onClickTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingsTabItem
