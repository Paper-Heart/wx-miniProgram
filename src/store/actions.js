import {RECEIVE_LIST} from "./mutation_type"
import listData from "../datas/list-data"
export default{
    getList({commit}){
        //触发对应的mutations
        commit(RECEIVE_LIST,listData)
    }
}