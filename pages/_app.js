import styled from 'styled-components'
// import '../styles/globals.css'

const AppWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  
`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  )
}

export default MyApp
