import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <h1>My Academy Dashboard</h1>

      <CohortDetails
        name="INTADMDF10 - .NET FSD"
        startDate="10-Feb-2026"
        status="ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        name="INTADMDF11 - Java FSD"
        startDate="15-Jan-2026"
        status="completed"
        coach="Alice"
        trainer="Robert"
      />

      <CohortDetails
        name="INTADMDF12 - React"
        startDate="20-Mar-2026"
        status="ongoing"
        coach="Smith"
        trainer="Michael"
      />
    </div>
  );
}

export default App;