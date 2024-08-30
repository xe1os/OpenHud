import "../styles/logout.css";
import {Container, Button} from "react-bootstrap";

function Logout(props) {
    const { handleLogout } = props;

    const logout = async (event) => {
        event.preventDefault();
        handleLogout(false, null);
    }

    return (
        <Container className="mt-4 text-center">
            <Button onClick={logout}>Logout</Button>
        </Container>
    );
}

export default Logout;