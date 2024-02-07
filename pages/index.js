import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCandidatesData } from '../store/actions/candidateAction';
import Table from '../components/CandidatesTable';
import { CreateCandidate } from '../components/Button/buttons';
import { CandidateTableSkeleton } from '../components/Skeletons';

 
export function Candidates({ candidates, loading }) {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center">
        <h1 className={`text-4xl`}>Candidates</h1>
      </div>
      <div className="mt-4 flex items-center justify-end gap-2 md:mt-8 w-full px-8">
        <CreateCandidate />
      </div>
       {loading ? <CandidateTableSkeleton /> : <Table candidates={candidates} />}
      <div className="mt-5 flex w-full justify-center">
      </div>
    </div>
  );
}


export default function Home({ candidateData, searchParams }) {
  const dispatch = useDispatch();

  const candidatesData = useSelector((state) => state.candidates);

  const { candidates, loading } = candidatesData;

  useEffect(()=> {
    dispatch(getCandidatesData());
  }, []);

  return (
    <Candidates candidates={candidates} loading={loading} searchParams={searchParams} />
  )
}
