import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import PetPage from './components/PetPage';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path={'/'}>
            <PetPage/>
          </Route>
          <Route exact path={'/pets/new'}>
            <AddPet/>
          </Route>
          <Route exact path={'/pets/:id/edit'}>
            <EditPet/>  
          </Route>
          <Route exact path={'/pets/:id'}>
            <Details></Details>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
