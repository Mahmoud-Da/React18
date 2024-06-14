import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav nav" "menu main aside"',
        }}
      >
        <GridItem area={"nav"} bg={"green"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area={"menu"} bg={"pink"}>
            Menu
          </GridItem>
        </Show>

        <GridItem area={"main"} bg={"orange"}>
          Main
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"blue"}>
            Aside
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
