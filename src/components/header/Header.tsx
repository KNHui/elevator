import './Header.scss';
import logo from "assets/logo.svg";

export function Header(props: { title: string, onChangeMode: Function }): JSX.Element {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                <a href="/" onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode();
                }}>
                    {props.title}
                </a>
            </h1>
        </header>
    );
}
