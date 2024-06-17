import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "aside"',
          lg: '"nav nav nav" "menu aside right_menu"',
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

        <GridItem area={"aside"} bg={"orange"}>
          Aside
        </GridItem>
        <Show above="lg">
          <GridItem area={"right_menu"} bg={"blue"}>
            Right menu
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
