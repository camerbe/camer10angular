import {dataProfileModel} from "./profile.model";

export interface User {
  success:boolean,
  data:dataProfileModel,
  message:string
}
