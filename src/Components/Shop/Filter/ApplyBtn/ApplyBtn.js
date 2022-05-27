import { connect } from 'react-redux'
import { UPDATE_STORE } from '../../../../Redux/actions'

const ApplyBtn = ({ UpdateStore }) => {
  return (
    <button
      className='filterBtn'
      onClick={() => {
        UpdateStore()
      }}
    >
      Apply Filter
    </button>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    UpdateStore: () => dispatch({ type: UPDATE_STORE }),
  }
}
export default connect(null, mapDispatchToProps)(ApplyBtn)
