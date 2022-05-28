import {useEffect, useState} from 'react'

import StudentCard from './StudentCard';

const StudentCardsContainer = ({apiData, handleTagSubmission}) => {

    return(
        <>
            {apiData.map(data => <StudentCard handleTagSubmission={handleTagSubmission} key={data.id} data={data}/>)}
        </>
    )
}

export default StudentCardsContainer;