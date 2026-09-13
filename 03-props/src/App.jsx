import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="kirtan"
        age={22}
        img="https://images.unsplash.com/photo-1788773304510-8dbf5f3b5096?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="rakesh"
        age={21}
        img="https://images.unsplash.com/photo-1788929899432-7753a8a42e1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
