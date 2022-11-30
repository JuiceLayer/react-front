import { FC } from 'react';

import Data from './DestinationsData' //TODO change name

//components
import Destination from "./Destination/Destination"

//style
import * as S from './Destinations.style';

const Destinatons: FC = ( ) => {

    return (
        <S.Container>
            <S.Grid>
    {        Data.map(item => (
            <Destination
                cityName={item.cityName}
                measureTemperture={item.measureTemperture}
                feltTemperture={item.feltTemperture}
                humidity={item.humidity}
                weatherDescription={item.weatherDescription}/>
        
    ))}
            </S.Grid>
        </S.Container>
    );
};

export default Destinatons;
