import React, {useContext} from 'react'
import alertContext from "../../context/alert/alertContext"

const Alert = () => {

const AlertContext = useContext(alertContext);

  return (
      AlertContext.alert !== null && (
    <div className={`alert alert-${AlertContext.alert.type}`}>
      <i className="fas fa-info-circle"/> {AlertContext.alert.msg}
    </div>
    )
  )
}

export default Alert
