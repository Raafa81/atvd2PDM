

import { View, Image } from 'react-native';

import {
    Container,
    Header,
    UserContainer,
    UserName,
    Input,
    ViewCards,
    TitleCards,
    Touch,
    TitleTouch
} from './styles';

import Entrada from '../../../assets/entradas.png';
import Saida from '../../../assets/saidas.png';

export function Register({ navigation }) {

    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserName>Cadastro</UserName>
                </UserContainer>
            </Header>

            <View>
                <Input placeholder='Nome' />
                <Input placeholder='Preço' />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 290 }}>
                <ViewCards>
                    <Image
                        source={Entrada}
                    />
                    <TitleCards>Income</TitleCards>
                </ViewCards>
                <ViewCards>
                    <Image
                        source={Saida}
                    />
                    <TitleCards>Outcome</TitleCards>
                </ViewCards>
            </View>

            <Touch onPress={() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }],
                })
            }}>
                <TitleTouch >Enviar</TitleTouch>
            </Touch>
        </Container>
    );
}