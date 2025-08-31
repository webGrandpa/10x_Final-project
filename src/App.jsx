import Header from "./components/Header"
import MainContent from "./components/MainContent"

function App() {

  return (
    <>
      <Header />
      <MainContent className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold">Welcome to Our Website</h1>
        <p className="mt-2">This is a simple React application.</p>
      </MainContent>
    </>
  )
}

export default App
