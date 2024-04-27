import Head from "next/head";
import { CssVarsProvider } from "@mui/joy/styles";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ContentContainerStyled,
  FormStyled,
  InputContainerStyled,
  HyperlinkStyled,
  LeagueInputStyled,
  LeagueInputSearchButtonStyled,
} from "../styles/pageStyles/landingPage/styled";

export default function Search() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    router.push(`/league/${inputText}`);
  };

  return (
    <div>
      <Head>
        <title>FPL Transfers</title>
        <meta
          name="fpl transfers"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <CssVarsProvider>
        <ContentContainerStyled>
          <InputContainerStyled>
            <FormStyled onSubmit={onSubmitHandler}>
              <LeagueInputStyled
                size="lg"
                placeholder="Search League ID"
                required
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <LeagueInputSearchButtonStyled type="submit">
                Submit
              </LeagueInputSearchButtonStyled>
            </FormStyled>
          </InputContainerStyled>
          <HyperlinkStyled href="/league">
            See an example from my FPL league
          </HyperlinkStyled>
        </ContentContainerStyled>
      </CssVarsProvider>
    </div>
  );
}
