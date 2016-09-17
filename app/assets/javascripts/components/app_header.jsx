const AppHeader = (props) => {
  return (
    <Header className="app-header" clearTheme={true} >
      <HeaderSection>
        <HeaderButton text={props.title} iconAlign="left" href="/" />
      </HeaderSection>
    </Header>
  );
};