import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './Container';

// import rain from './assets/rain.jpg';
// import cart from './assets/grocery.svg'

// import {
//   CSSTransition,
//   TransitionGroup
// }from 'react-transition-group';

//import Header from './Header';


class App extends Component {
  render() {
    return (
      <Router>
        <Container />
      </Router>
    );
  }
}

// class App2 extends Component {
//   render() {
//     return (
//       <h1>hello</h1>
//     );
//   }
// }

// class Hello extends Component {
//   render() {
//     return (<h3 className="App-color">Color :<br />{this.props.name} <br />{this.props.name1}<br />{this.props.name2}</h3>);

//   }
// }

// class HelloFullName extends Component {
//   constructor(props) {
//     super(props);

//     let firstname = this.props.name.split(" ")[0];

//     let products = {
//       id: 1,
//       title: "Yellow Pail",
//       description: "On-demand sand castle construction expertise.",
//       url: "#",
//       votes: 41,
//       submitterAvatarURL: rain,
//       productImageUrl: logo
//     }

//     this.state = {
//       name: firstname,
//       product: products,
//       buyItems: ['milk', 'bread', 'butter'],
//       message: ''
//     }

//   }

//   addItem(e) {
//     e.preventDefault();//to not re-render the whole page
//     const { buyItems } = this.state;
//     const newItem = this.newItem.value;

//     const isOnList = buyItems.includes(newItem)
//     if (isOnList) {
//       this.setState({
//         message: 'This item is already in list'
//       })
//     } else {

//       newItem !== "" && this.setState({
//         buyItems: [...this.state.buyItems, newItem],
//         message: ''
//       })
//     }

//     //to clear input field
//     this.addForm.reset();
//   }
//   removeItem(item) {
//     console.log("remove item" + item);
//     const newBuyItem = this.state.buyItems.filter(buyItems => {
//       console.log('buy Item :' + buyItems);
//       console.log('item ' + item);

//       return buyItems !== item;
//     });
//     console.log('neBuy item ' + newBuyItem);
//     this.setState({
//       buyItems: [...newBuyItem]
//     })
//   }
//   clearList(e) {
//     this.setState({
//       buyItems: [],
//       message: 'No item in List'
//     })
//   }
//   render() {
//     const { buyItems, message } = this.state;//short hand for this.state by just mention buyItems
//     return (
//       <div>
//         <h1>Hello {this.state.name}!</h1>
//         {this.state.product.description}
//         <img src={this.state.product.submitterAvatarURL} alt="df" className="image"></img>
//         <br />
//         <img src={cart} alt="grocery" className="grocery-image"></img>
//         <header>
//           <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => { this.addItem(e) }}>
//             <input ref={input => this.newItem = input} type="text" className="form-control" placeholder="makad" />
//             <button type="submit" className="button">Add</button>
//           </form>
//           <br />
//         </header>
//         <div className="content">
//           {
//             message !== "" && <p className="message">{message}</p>
//           }
//           <div className="table-content">
//             <table className="table">
//               <caption>Shopping Cart</caption>

//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Item</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {buyItems.map(item => {
//                   return (<tr key={item}>
//                     <th scope="row">1</th>
//                     <td>{item}</td>
//                     <td><button onClick={(e) => this.removeItem(item)} type="button"> Remove </button></td>
//                   </tr>)
//                 })}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td></td>
//                   <td><button onClick={(e) => this.clearList()}>clear List</button></td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
//}

export default App;