// Write your code here
import './index.css'

const Message = props => {
    const {isLoggedInOrLoggedOut} = props
    const messageContent=isLoggedInOrLoggedOut ? "Welcome User" : "Please Login"
    return <h1 className="heading">{messageContent}</h1>
}
export default Message