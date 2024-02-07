import { CANDIDATES_SUCCESS, CANDIDATES_ERROR, CANDIDATE_UPDATE_SUCCESS, CANDIDATE_UPDATE_ERROR, CANDIDATE_UPDATE_REQUEST } from "../types";
import { getAllCandidates } from "../../pages/api/api";
// import editCandidate from '../../pages/api/api';

export const getCandidatesData = () => async (dispatch) => {
  try {
    const response = await getAllCandidates();
    dispatch({
      type: CANDIDATES_SUCCESS,
      payload: response,
    }); 
  } catch (error) {
    dispatch({
      type: CANDIDATES_ERROR,
      payload: "Failed to fetch candidates",
    });
  }
};

export const updateCandidate = (data) => async (dispatch) => {
  dispatch({ type: CANDIDATE_UPDATE_REQUEST });
  try{
    const response = await fetch(`http://localhost:8080/api/candidates`,{
        method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)
      });
      dispatch({
        type: CANDIDATE_UPDATE_SUCCESS,
        payload: data,
      });
  } catch (error) {
    console.log('[D]', error);
    dispatch({
      type: CANDIDATE_UPDATE_ERROR,
      payload: "Failed to update candidate",
    });
  }
}