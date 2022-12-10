import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, Center, Code, Heading, Link, VStack} from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"

const EVENT = "http://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"events": [{"name": "state.hydrate"}]})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
useEffect(() => {
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, result, setResult, EVENT, router)
  }
  update()
})
return (
<Center sx={{"paddingTop": "10%"}}>
<VStack spacing="1.5em"
sx={{"fontSize": "2em"}}>
<Heading sx={{"fontSize": "2em"}}>
{`Welcome to Pynecone!`}</Heading>
<Box>
{`Get started by editing `}
<Code sx={{"fontSize": "1em"}}>
{`stt_youtube_summarizer_webapp/stt_youtube_summarizer_webapp.py`}</Code></Box>
<NextLink href="https://pynecone.io/docs/getting-started/introduction"
passHref={true}>
<Link sx={{"border": "0.1em solid", "padding": "0.5em", "borderRadius": "0.5em", "_hover": {"color": "rgb(107,99,246)"}}}>
{`Check out our docs!`}</Link></NextLink></VStack>
<NextHead>
<title>{`Pynecone App`}</title>
<meta content="favicon.ico"
name="description"/>
<meta property="og:image"
content="A Pynecone app."/></NextHead></Center>
)
}