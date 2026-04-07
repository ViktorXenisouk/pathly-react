import {type Result} from "../types/result"

const parseResult = (data: any) : Result => {
     return data.json
          ?
          typeof data.json === "string" ? JSON.parse(data.json)
            :
            data.json as Result
          :
          data as Result
}

export { parseResult }