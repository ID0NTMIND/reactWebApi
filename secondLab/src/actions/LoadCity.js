import {getHeaderMini, getInfo} from "../util/City";
import UpdateCityInfo from "./UpdateCityInfo"
import ErrorCity from "./CityErrored"

export default async function (name) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=2e19bb27bd5e717bac388dc0c1827b17&q=${name}`);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const response_1 = response;
        const response_2 = await response_1.json();
        return UpdateCityInfo(name, getHeaderMini(response_2), getInfo(response_2));
    }
    catch (err) {
        return ErrorCity(name);
    }
}