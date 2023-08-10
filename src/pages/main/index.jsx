import Sidebar from '../../components/sidebar';
import Body from './body';
import { Sidebody, Wrapper, BodyWrapper } from "./style";

function Main() {
    return (
        <Wrapper>
            <Sidebody>
                <Sidebar/>
                <BodyWrapper>
                    <Body/>
                </BodyWrapper>
            </Sidebody>
        </Wrapper>

    )
}

export default Main;