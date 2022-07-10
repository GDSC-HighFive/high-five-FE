import React, { Component } from "react";
import {
    Button,
    Input,
    Card,
    Label,
    Wrapper,
    Title,
    InputsContainer,
    ButtonContainer
} from "./atoms";
import "./styles.css";

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Succesful Login! Username: ${this.state.username} - Password: ${this.state.password}`
        );
    };

    render() {
        return (
            <Wrapper>
                <Card>
                    <Title>Dreather Login</Title>
                    <form onSubmit={this.handleSubmit}>
                        <InputsContainer>
                            <div>
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" />
                            </div>
                        </InputsContainer>

                        <ButtonContainer>
                            <Button disabled type="submit">
                                Submit
                            </Button>
                        </ButtonContainer>
                    </form>
                </Card>
            </Wrapper>
        );
    }
}

export default LoginForm;