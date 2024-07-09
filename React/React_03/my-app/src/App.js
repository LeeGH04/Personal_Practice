import { Fragment, Component } from "react";
import React from "react";

class App extends Component {
  render() {
    return (
      <h1>
        All {" "} <em>corgis</em> {" "} are awesome
      </h1>
    )
  }
}
<li data-object-id={Object.id}>...</li>
/*
class Alert extends Component{
  render() {
    return (
      <p>
        {this.props.isError && '*ERROR*'}
        {this.props.children}
        {this.props.isError && '*ERROR*'}
      </p>
    );
  }
}

class Breeds extends Component {
  render() {
    return (
      <dl>
        {this.props.list.map(
          ({breed,description}) => (
            <Fragment key = {breed}>
              <dt>{breed}</dt>
              <dd>{description}</dd>
            </Fragment>
          )
        )}
      </dl>
    )
  }
}

class Select extends Component {
  render() {
    return(
      <select>
        {this.props.items.map((item) =>(
          <option key={item}>{item}</option>
        ))}
      </select>
    );
  }
}

class Select extends Component {
  render() {
    return (
      <select>
        {this.props.items.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    )
  }
}

class UserBottons extends Component {
  render() {
    const hasCreditCard = this.props.user.CreditCard !== null;
    const hasAddress = this.props.user.address !== null;
    const disabled = !this.props.canCheckout
    return hasCreditCard ? (
      <Fragment>
        <button disabled = {disabled}>checkout</button>
        {hasAddress && (
          <button disabled = {disabled}>One-click buy</button>
        )}
      </Fragment>
    ) : (
      <button>Add credit card</button>
    );
  }
}

class GuestBotton extends Component {
  render() {
    return (
      <Fragment>
        <button>Login</button>
        <button disabled = {this.props.canCheckout}>checkout as guest</button>
      </Fragment>
      
    );
  }
}

class ShoppingCart extends Component {
  render() {
    const hasItem = this.props.items.lenght > 0;
    const isLoggedin = this.props.user !== null;
    const isAvailable = this.props.items.every((item) => !item.outOfStock);
    const canCheckout = hasItem && isAvailable;
    return isLoggedin ? (
      <UserBottons user={this.props.user} canCheckout={canCheckout} />
    ) : (
      <GuestBotton canCheckout={canCheckout} />
    );
  }
}

class ShoppingCart extends Component {
  render() {
    const hasItem = this.props.items.length > 0;
    const isLoggedin = this.props.user !== null;
    const hasCreditCard = this.props.user.CreditCard !== null;
    const hasAddress = this.props.user.address !== null; 
    const isAvailable = this.props.items.every((item) => !item.outOfStock);

    return isLoggedin ? (
      hasCreditCard ? (
        <Fragment>
          <button disabled={!hasItem || !isAvailable}>
            checkout
          </button>
          {hasAddress && (
            <button disabled={!hasItem || !isAvailable}>
              One-click buy
            </button>
          )}
        </Fragment>
      ) : (
        <button>Add credit card</button>
      )
    ) : (
      <Fragment>
        <button>Login</button>
        <button disabled={!hasItem || !isAvailable}>
          checkout as guest
        </button>
      </Fragment>
    );
  }
}


const status2icon = {
  draft : <DraftIcon />,
  published : <PublishedIcon />,
  delete : <TrashIcon />,
};
class PostStatus extends Component {
  render() {
    return status2icon[this.props.status] || status2icon.delete;
  }
}

// swich x
class PostStatus extends Component {
  render() {
    return this.props.status == "draft" ?
    <DraftIcon /> : 
    this.props.status == "published" ? 
    <PublishedIcon /> :
    <TrashIcon />;
  }
}

class UserName extends Component {
  render() {
    return (
      <p>
        {this.props.username}
        {this.props.isVerified && <Chekmark />}
      </p>
    );
  }
}

class ShoppingCart extends Component {
  render() {
    return (
      <aside>
        <h1>Shopping cart</h1>
        {this.props.items.lenght == 0 ? (
          <p>Your cart is empty.</p> 
        ) : (
          <CartItem items = {this.props.items} />
        )}
      </aside>
    );
  }
}


// 조기 반환 x
class Countdown extends Component {
  render() {
    const seconds = this.props.remaining % 60;
    const minutes = Math.floor(this.props.remaining / 60);
    const message = <p>{minutes} : {seconds}</p>;
    if (seconds > 0 || minutes > 0) {
      return message;
    } else {
      return null;
    }
  }
}
// 조기 반환 o
class Countdown extends Component {
  render() {
    if(this.props.remaining == 0) {
      return null;
    }
    const seconds = this.props.remaining % 60;
    const minutes = Math.floor(this.props.remaining / 60);
    const message = <p>{minutes} : {seconds}</p>;
  }
}


class Link extends Component {
  render() {
    return (
      <p>
        <a href={this.props.url}>
          {this.props.children}
        </a>
      </p>
    )
  }
}

class ButtonList extends Component {
  getButton(text) {
    return (
      <button disabled={this.props.disabled}>{text}</button>
    );
  }
  render() {
    return (
      <aside>
        {this.getButton('Up')}
        {this.getButton('Down')}
      </aside>
    )
  }
}

// JSX를 사용함
class DateTimeNow extends Component {
  render() {
    const dateTimeNow = new Date().toLocaleString()
    const now = <date>{dateTimeNow}</date>
    const message = <p>Today is {now}</p>
    return (
      <Fragment>
        <span>current date and time is {dateTimeNow}.</span>,
        <p></p>,
        <span>{message}</span>
      </Fragment>
    )
  }
}



// JSX를 사용하지 않음
class DateTimeNow extends Component {
  render() {
    const dateTimeNow = new Date().toLocaleString()
    return React.createElement(
      'span',
      null,
      `current date and time id ${dateTimeNow}.`
    )
  }
}
  */


export default App;
