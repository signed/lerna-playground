import { applicationLogic, Usage } from './usage.js';


console.log(JSON.stringify(applicationLogic(), null, 2) + new Usage().value)
