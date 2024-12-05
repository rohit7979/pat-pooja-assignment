import './App.css'
import DatePickerContainer from './components/DatePicker/DatePickerContainer';
import FormContainer from './components/form/FormContainer';
import TableContainer from './components/table/TableContainer'
import data, { columns } from './data'
import { formConfig } from './formConfig';



function App() {

  const handleSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  const handleDateChange = (dateOrRange) => {
    console.log("Selected Date/Range:", dateOrRange);
  };
  return (
    <>
      <div className="p-5 mx-10 ">
      <h1 className="text-2xl font-bold mb-5 text-teal-700 text-center">Custom Table Component</h1>
      <TableContainer
        data={data}
        columns={columns}
        headerStyle={{ font: "text-sm font-bold", background: "bg-green-500" }}
        bodyStyle={{ font: "text-sm", background: "bg-white" }}
      />
    </div>
        
       <div className="p-5 mx-10 ">
        <h1 className="text-2xl font-bold mb-5 text-teal-700 text-center">Custom Form Component</h1>
       <FormContainer config={formConfig} onSubmit={handleSubmit} />
       </div>

       <div className="p-8">
      <h1 className="text-2xl font-bold mb-5 text-teal-700 ">Custom Date Picker</h1>
      <DatePickerContainer
        onDateChange={handleDateChange}
        styles={{
          container: "bg-gray-100",
          button: "bg-gray-300 hover:bg-gray-400",
          activeButton: "bg-blue-600 text-white",
          input: "bg-white",
        }}
      />
    </div>
    </>
  )
}

export default App
