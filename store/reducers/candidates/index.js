import { CANDIDATES_REQEUST, CANDIDATES_SUCCESS, CANDIDATES_ERROR, CANDIDATE_UPDATE_ERROR, CANDIDATE_UPDATE_SUCCESS, CANDIDATE_UPDATE_REQUEST } from "../../types";

const initialState = {
  candidates: [],
  loading: true,
  error: '',
};

const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATES_SUCCESS:
      return {
        ...state,
        candidates: action.payload,
        loading: false,
      };

    case CANDIDATES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case CANDIDATES_REQEUST:
      return {
        loading: true,
        error: '',
        candidates: initialState.candidates,
      }

    case CANDIDATE_UPDATE_SUCCESS: {
      const { candidate_id, status } = action.payload;
      console.log('payload: ', candidate_id, status);
      return {
        ...state,
        candidates: state.candidates.map((candidate) => {
          if (candidate.candidate_id === candidate_id) {
            return {
              ...candidate,
              candidate_status: status,
            };
          }
          return candidate;
        }),
      };
    }
    case CANDIDATE_UPDATE_REQUEST:
    case CANDIDATE_UPDATE_ERROR:
      return {
        ...state,
      }

    default:
      return state;
  }
};

export default candidateReducer;
