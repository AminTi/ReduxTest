import React from "react"
import { connect } from "react-redux"
import { buyCake } from "../redux/"

function cakeContainer(props) {
    return (
        <div>
            <div> Number Of cakes is - {props.numOfCakes}</div>
            <button onClick={props.buyCake}> Buy Cake </button>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        numOfCakes: state.numOfCakes,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(cakeContainer)
