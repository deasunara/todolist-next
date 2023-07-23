import AddButton from "./addtext";
import AddTable from "./table";



const Home = () => {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo List</h1>
          <AddButton />
          <AddTable /> 
      </div>
    </main>
  )
}
export default Home;