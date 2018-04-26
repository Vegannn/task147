var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
          <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
          <p className={'contactLabel name'}>
              Imię: {this.props.contact.firstName}
          </p>
          <p className={'contactLabel2 forname'}>
              Nazwisko: {this.props.contact.lastName}
          </p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
          </a>
      </div>
    )
  },
});