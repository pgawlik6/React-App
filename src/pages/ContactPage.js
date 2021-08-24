import React, { Component } from 'react'
import '../styles/ContactPage.css'
import { Prompt } from 'react-router-dom'


class ContactPage extends Component {
    state = {
        name: "",
        email: "",
        title: "",
        content: "",
        isEmpty: true,
        messageSend: "",

        errors: {
            name: false,
            email: false,
            title: false,
            message: false,
        }
    }


    errorMessages = {
        name_incorrect: 'Imię musi być dłuższe niż 2 znaki',
        email_incorrect: "Nieprawidłowy email! (Musi zawierać jeden znak '@' i przynajmiej jeden znak '.'",
        title_incorrect: "Tytuł musi zawierać przynajmniej 10 znaków",
        content_incorrect: "Wiadomość musi zawierać przynajmniej 20 znaków"
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const validation = this.formValidation()

        if (validation.correct) {
            this.setState({
                name: "",
                email: "",
                title: "",
                content: "",
                isEmpty: true,
                messageSend: "Formularz został wysłany!",
                errors: {
                    name: false,
                    email: false,
                    title: false,
                    message: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    email: !validation.email,
                    title: !validation.title,
                    message: !validation.message,
                }
            })
        }

    }

    handleChange = (e) => {
        const name = e.target.name
        if (e.target.value.length > 0) {
            this.setState({
                [name]: e.target.value,
                isEmpty: false,
            })
        } else {
            this.setState({
                [name]: e.target.value,
                isEmpty: true,
            })
        }
    }

    formValidation = () => {
        let name = false;
        let email = false;
        let title = false;
        let message = false;
        let correct = false;

        if (this.state.name.length > 2) {
            name = true;
        }

        if (this.state.email.indexOf('@') !== -1 && this.state.email.indexOf('.') !== -1) {
            email = true;
        }

        if (this.state.title.length > 10) {
            title = true;
        }

        if (this.state.content.length > 20) {
            message = true;
        }

        if (name && email && title && message) {
            correct = true;
        }

        return ({
            correct,
            message,
            name,
            email,
            title
        })
    }

    componentDidUpdate() {
        if (this.state.messageSend !== '') {
            setTimeout(() => this.setState({
                messageSend: ''
            }), 3000)
        }
    }

    render() {
        return (
            <div className="contact-form">
                <h2>Formularz kontaktowy</h2>
                <form onSubmit={this.handleSubmit} noValidate>
                    <label>Imię: <br />
                        <input
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                            id="name"
                            name="name"
                            maxLength="50"
                            placeholder="wpisz swoje imię...">
                        </input>
                        {this.state.errors.name && <span>{this.errorMessages.name_incorrect}</span>}
                    </label>

                    <label>Email: <br />
                        <input
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            maxLength="70"
                            placeholder="wpisz swój e-mail...">
                        </input>
                        {this.state.errors.email && <span>{this.errorMessages.email_incorrect}</span>}
                    </label>

                    <label>Tytuł: <br />
                        <input
                            value={this.state.title}
                            onChange={this.handleChange}
                            type="text"
                            id="title"
                            name="title"
                            maxLength="100"
                            placeholder="wpisz tytuł wiadomości...">
                        </input>
                        {this.state.errors.title && <span>{this.errorMessages.title_incorrect}</span>}
                    </label>

                    <label>Wiadomość: <br />
                        <textarea
                            value={this.state.content}
                            onChange={this.handleChange}
                            id="content"
                            name="content"
                            maxLength="1000"
                            rows="6"
                            placeholder="wpisz treść wiadomości...">
                        </textarea>
                        {this.state.errors.message && <span>{this.errorMessages.content_incorrect}</span>}
                    </label>

                    <button>Prześlij</button>
                </form>
                {this.state.messageSend && <h3><br />{this.state.messageSend}</h3>}
                <Prompt
                    when={!this.state.isEmpty}
                    message="Nie dokończyłeś wypełniać formularz! Czy na pewno chcesz opuścić tę podstronę?"
                />
            </div >

        );
    }
}

export default ContactPage;