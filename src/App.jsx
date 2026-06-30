import Badge from "./components/Badge/Badge"

function App() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <div className="flex justify-center items-center gap-6">
        <Badge size="sm" color="neutral"/>
        <Badge size="md" color="neutral"/>
        <Badge size="lg" color="neutral"/>
      </div>

      <div className="flex justify-center items-center gap-6">
        <Badge size="sm" color="error"/>
        <Badge size="md" color="error"/>
        <Badge size="lg" color="error"/>
      </div>

      <div className="flex justify-center items-center gap-6">
        <Badge size="sm" color="warning"/>
        <Badge size="md" color="warning"/>
        <Badge size="lg" color="warning"/>
      </div>

      <div className="flex justify-center items-center gap-6">
        <Badge size="sm" color="success"/>
        <Badge size="md" color="success"/>
        <Badge size="lg" color="success"/>
      </div>

      <div className="flex justify-center items-center gap-6">
        <Badge size="sm" color="brand"/>
        <Badge size="md" color="brand"/>
        <Badge size="lg" color="brand"/>
      </div>
    </div>
  )
}

export default App
