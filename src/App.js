import { Fragment } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import ApplicationList from "./components/ApplicationsList/ApplicationList";
import ApplicationForm from "./components/Form/ApplicationForm";

function App() {
  const testData = [
    {
      id: 0,
      title: 'Web Developer',
      company: 'Nile',
      status: 'Applied'
      
    },
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'XYZ',
      status: 'Requested Interview'
    },

  ]
  return (
    <Fragment>
      <MainHeader />
      <ApplicationForm />
      <ApplicationList data={testData} />
    </Fragment>
  );
}

export default App;
