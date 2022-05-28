const GradesList = ({data}) => {
    
  //  I KNOW, THE KEY ID IS REALLY UNCONVENTIONAL 
  return ( <>
    {data.map((grade) => (
          <li key={Math.ceil(Math.random() * 1000000)}> 
            Test {data.indexOf(grade) + 1}: {grade}
          </li>
        ))}
  </>)
}

export default GradesList;