import { UpdateCandidate } from '../Button/buttons';
import Dropdown from '../Dropdown';
import { statusLabelsMap, statusValuesMap } from '../../helpers/constants';
import { useDispatch } from 'react-redux';
import { updateCandidate } from '../../store/actions/candidateAction';

const CandidatesTable = ({
  candidates
})  => {
  const dispatch = useDispatch();
  const statusMenuOptions = Object.values(statusValuesMap).map(s => ({ id: s, label: statusLabelsMap[s]}));
  const onStatusSelect = async (id, candidateId) => {
    const candidate = candidates.filter(candidate => candidate.candidate_id === candidateId);
    const values = {
      candidate_id: candidate[0].candidate_id,
      status: id,
    }
    dispatch(updateCandidate(values));
  }

  return (
    <div className="mt-6 flow-root mx-8">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {candidates?.map((candidate) => (
              <div
                key={candidate.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{candidate.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{candidate.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {candidate.amount}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateCandidate id={candidate.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Candidate Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Mobile
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Expected Salary
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {candidates?.map((candidate) => (
                <tr
                  key={candidate.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{candidate.candidate_name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {candidate.candidate_score}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {candidate.candidate_email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {candidate.candidate_mobile}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {candidate.candidate_expected_salary}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <div className="flex justify-start gap-3 items-center">
                    <Dropdown options={statusMenuOptions} onSelect={(id) => onStatusSelect(id, candidate.candidate_id)}>
                      <UpdateCandidate id={candidate.id} />
                    </Dropdown>
                    {statusLabelsMap[candidate.candidate_status]}
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CandidatesTable;
