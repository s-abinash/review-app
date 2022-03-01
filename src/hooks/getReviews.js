import axios from "axios";
import {store} from '../store/store'

store.subscribe(listener)

const select = state => state.counter;

function listener() {
    let value = select(store.getState())
    console.log(value)
}

const getReviews = async () => {
    console.log("getting data....")
    const res=await axios.get('/reviews');
    return res.data;
}

export default getReviews;