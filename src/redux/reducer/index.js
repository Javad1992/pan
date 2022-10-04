import { combineReducers } from "redux";
// reducers
import { authReducer } from "./auth";
import { checklistReducer } from "./checklist";
import { contentReducer } from "./content";
import { educationReducer } from "./educationService";
import { expertRecuer } from "./expert";
import { expertServiceReducer } from "./expertService";
import { farmerReducer } from "./farmer";
import { generalReducer } from "./general";
import { gisReducer } from "./gis";
import { modalReducer } from "./modal";
import { profileReducer } from "./profile";
import { questionnaireReducer } from "./questionnaire";
import { searchReducer } from "./search";
import { sysAdminReducer } from "./sysAdmin";
import { visitReducer } from "./visit";

export const reducer = combineReducers({
  auth: authReducer,
  visit: visitReducer,
  modal: modalReducer,
  general: generalReducer,
  profile: profileReducer,
  farmer: farmerReducer,
  checklist: checklistReducer,
  expert: expertRecuer,
  gis: gisReducer,
  questionnaire: questionnaireReducer,
  searchTerm: searchReducer,
  expertService: expertServiceReducer,
  content: contentReducer,
  education: educationReducer,
  sysAdmin: sysAdminReducer,
});
