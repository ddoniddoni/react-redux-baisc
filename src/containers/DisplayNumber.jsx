import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";
export default connect()(DisplayNumber);
// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//   render() {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>;
//   }
// }
