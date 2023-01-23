const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  if (!isError) {  
    return (
      <div className="notification">
        {message}
      </div>
    )
  }
  else {
    return (
      <div className="errorNotification">
        {message}
      </div>
    )
  }
}

export default Notification