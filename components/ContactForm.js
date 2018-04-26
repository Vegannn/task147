var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className={'contactForm'}>
        <input type={'text'} placeholder={'Imię'} value={'this.props.contact.firstName'} className={'form-control'}/>
        <input type={'text'} placeholder={'Nazwisko'} value={'this.props.contact.lastName'} className={'form-control'}/>
        <input type={'email'} placeholder={'Email'} value={'this.props.contact.email'} className={'form-control'}/>
        <button type={'submit'} className={'btn btn-primaryl'}>
          {"Dodaj kontakt"}
        </button>
      </div>
    )
  },
})