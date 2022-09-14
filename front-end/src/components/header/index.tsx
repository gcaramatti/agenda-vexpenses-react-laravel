import { Header, Logo, ContentLimit, Logout, LogoutContent } from "./styles";

export default function HeaderComponent() {
  return (
    <Header>
      <ContentLimit>
        <Logo>VExpenses - Contact Book</Logo>
        <Logout>
          Usuário
          <LogoutContent>Desconectar</LogoutContent>
        </Logout>
      </ContentLimit>
    </Header>
  );
}
